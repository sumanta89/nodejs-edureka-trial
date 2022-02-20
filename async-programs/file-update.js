const fs = require("fs");
fs.appendFile("newData.txt", "Test Append Data", (err)=>{
    console.log(err ? err : "Update file successful");
});