const { ObjectId } = require("mongodb");
const db = require("../../config/mongodb");

exports.add = (model, callback) => {
    const collection = db.getCollection("user");
    collection.insertOne({name:model.name, email:model.email, password:model.password, gender:model.gender})
    .then(()=>{
        callback();
    }, (err) => {throw new Error(err);})
}

exports.update = (model, callback) => {
    const collection = db.getCollection("user");
    const filter = {_id : ObjectId(model._id)};
    collection.findOneAndUpdate(filter, {$set : {name:model.name, password:model.password, gender:model.gender}})
    .then(()=>{
        callback();
    }, (err) => {throw new Error(err);})
}

exports.fetchUser = (id, callback) => {
    const collection = db.getCollection("user");
    collection.findOne({_id : ObjectId(id)}).then((user)=>{
        callback(user);
    }, (err) => {throw new Error(err);});
}

exports.fetchUser = (id, callback) => {
    const collection = db.getCollection("user");
    collection.findOneAndDelete({_id : ObjectId(id)}).then(()=>{
        callback();
    }, (err) => {throw new Error(err);});
}

exports.authenticate = (email, callback) => {
    const collection = db.getCollection("user");
    collection.findOne({email}).then((user)=>{
        callback(user);
    }, (err) => {throw new Error(err);});
}