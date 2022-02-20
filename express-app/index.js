const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const userAuthRoutes = require("./user/routing/user-auth-routes");
const userRoutes = require("./user/routing/user-routes");
const tweetRoutes = require("./tweet/router/tweet");
const mongodb = require("./config/mongodb");
const auth = require("./middleware/auth");
const errorHandler = require("./middleware/errorHandler");
mongodb.connect();
server.listen(3200, ()=>{
    console.log("Server is listening on port 3200");
});
server.use(bodyParser.json());
server.use("/api/user/auth", userAuthRoutes);
server.use("/api/user", userRoutes);
server.use("/api/tweet", auth, tweetRoutes);
server.use(errorHandler);
server.get("/", (req, res)=>{
    res.end("Connected to express server");
});