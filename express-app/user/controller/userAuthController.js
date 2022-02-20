const userModel = require("../model/user");
const userrepo = require("../repository/userrepo");
const jwt = require("jsonwebtoken");

exports.register = ((req,res) => {
    const newUser = new userModel(req.body.name, req.body.password, req.body.email, req.body.gender);
    userrepo.add(newUser, ()=>{res.send("User is added");})
});

exports.login = ((req,res) => {
    const {email, password} = req.body;
    userrepo.authenticate(email, (user) => {
        if(!user){
            res.status(400).send("Invalid Email");
        } else if(user.password == password){
            const token = jwt.sign({
                _id : user._id,
                email : user.email
            }, "SecretKey", {
                expiresIn : '2h'
            })
            user.token = token;
            user.password = null;
            res.status(200).send(user);
        }else{
            res.status(400).send("Invalid Password");
        }
    })
});

exports.logout = ((req,res) => {
    res.send("User logged out");
});