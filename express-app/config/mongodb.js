const mongodbClient = require("mongodb").MongoClient;
const url = "mongodb+srv://sumanta_kundu:Feb2022@cluster0.taz3a.mongodb.net/twitterapp?retryWrites=true&w=majority";
var dbConnect;
exports.connect = () => {
    mongodbClient.connect(url).then(
        (client)=>{
            dbConnect = client;
        }, (err) => {
            console.log(err);
        }
    );
};

exports.getCollection = (name) => {
    return dbConnect.db("twitterapp").collection(name);
}