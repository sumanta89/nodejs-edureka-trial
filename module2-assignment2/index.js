const express = require("express");
const fs = require("fs");


const server = express();

server.listen(3300, ()=>{
    console.log("Server is listening on port 3300");
});
server.u