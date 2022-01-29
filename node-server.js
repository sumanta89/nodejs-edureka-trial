//Creating a weeb server

//1. import http module
const http = require("http");
http.createServer((req, res)=>{
    res.end("Hello World from Node server");
}).listen(3100);

console.log("Server is listening on port 3100");