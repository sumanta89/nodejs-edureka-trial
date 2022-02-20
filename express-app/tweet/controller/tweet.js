const { TokenExpiredError } = require("jsonwebtoken");
const tweetModel = require("../model/tweet");
const repo = require("../repository/tweet");
const jwt = require("jsonwebtoken");
exports.postTweet = (req, res)=>{
    const {content} = req.body;
    const newTweet = new tweetModel(content, new Date(), req.user._id);
    repo.add(newTweet, ()=>{
        res.send("Tweet is posted.");
    });
}