const userModel = require("../model/user");
const userrepo = require("../repository/userrepo");
exports.update = ((req,res) => {
    if(!req.body.id){
        res.status(400).send("ID is missing from request");
    }else{
        const userToUpdate = new userModel(req.body.name, req.body.password, req.body.email, req.body.gender, req.body.id);
        userrepo.update(userToUpdate, ()=>{res.send("User is updated");})
    }
});

exports.getById = ((req,res) => {
    if(!req.params.id){
        res.status(400).send("ID is missing from request");
    }else{
        const id = req.params.id;
        userrepo.fetchUser(id, (user)=>res.send(user));
    }
});

exports.deleteUser = ((req,res) => {
    if(!req.params.id){
        res.status(400).send("ID is missing from request");
    }else{
        const id = req.params.id;
        userrepo.fetchUser(id, ()=>res.send("User is deleted"));
    }
});