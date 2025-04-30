const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;                       
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },// do not need to define username and password, passportLocalMongoose automaticly define
    
})

userSchema.plugin(passportLocalMongoose);// its add field like username hash(for password) and salt
// for register new user , check login  

module.exports = mongoose.model("User",userSchema)