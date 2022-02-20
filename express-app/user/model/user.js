module.exports = class User{
    constructor(name, password, email, gender, id){
        this._id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.gender = gender;
    }
}