const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
    const token = req.headers["authorization"];
    if(!token){
        res.status(401).send("Unauthorized");
    }else{
        try{
            const data = jwt.verify(token, "SecretKey");
            req.user = data;
        }catch(err) {
            res.status(401).send("Token is Invalid");
        }
        next();
    }
}
module.exports = verify;