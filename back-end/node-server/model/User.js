const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    first_name : {
        required: true,
        type: String
    },
    last_name : {
        required: true,
        type: String
    },
    age : {
        required: true,
        type: Number
    },
    email : {
        required: true,
        type: String
    },
    password : {
        required: true,
        type: String
    },
    address : {
        required: true,
        type: String
    },
    gender : {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("User", User);