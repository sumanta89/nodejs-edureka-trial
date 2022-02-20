const fs = require("fs");

const handleError = (error, req, res, next) => {
    fs.appendFileSync("./logs/errorLogs.txt", "\n"+error.stack.toString());
    res.send("Server Error Occured, Please Contact Admin");
}
module.exports = handleError;