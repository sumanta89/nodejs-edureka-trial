const fs = require("fs");
const handleErrFunc = (err =>{
    if(err){
        console.log(err);
    }
});
const printDataFunc = ((err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
        fs.writeFile("newData.txt", data.toString(), handleErrFunc);
    }
});

fs.readFile("data.txt", printDataFunc);

console.log("task 2");

console.log("task 3");