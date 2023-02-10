const mongoose = require("mongoose");

// Set the email and their associated token as the model for resetting the password
const EmailToken = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    token : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("EmailToken", EmailToken);