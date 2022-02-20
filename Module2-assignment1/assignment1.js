const yargs = require("yargs");
const fs = require ("fs");
const { exit } = require("process");

console.log(yargs.argv);

fs.readFile("filename.txt", (err, data) => {
    if(err){
        console.log(err);
    }else{
        if(data.toString()!=""){
            yargs.argv._.every((element, index) => {
                console.log(data.toString().split(","), element);
                if(data.toString().split(",").includes(element)){
                    console.log("Filename already exists, Please provide new filename - " +element+".txt");
                    return false;
                }else{
                    fs.appendFileSync("filename.txt", ","+element);
                    writeNewFile(element+".txt");
                }
            });
        }else{
            fs.appendFile("filename.txt", yargs.argv._.toString(), (err) => {t
                if(err){
                    console.log(err);
                }else{
                    console.log("filenames added");
                    yargs.argv._.forEach(element => {
                        writeNewFile(element+".txt");
                    });
                }
           });
        }
       
    }
});

let writeNewFile = (filename) =>{
    fs.writeFile(filename, "You are awesome", (err) => {
        console.log(err?err:"file written - "+filename+".txt");
    })
}