const fs = require("fs");
fs.unlink("newData.txt", (err)=>{
    console.log(err ? err : "Delete file successful");
});