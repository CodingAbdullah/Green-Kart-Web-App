require("dotenv").config({ path: '../.env' });
const EmailToken = require('../model/EmailToken');
const jwt = require("jsonwebtoken");

exports.verifyEmailtoken = (req, res, next) => {
    const { email, token } = JSON.parse(req.body.body); // This is the uuid token the user submits

    EmailToken.find({ email }, (err, result) => {
        if (err){
            res.status(400).json({
                message: "Cannot query for Email Tokens"
            });
        }
        else {
            // Get the first and only Email token associated with User
            jwt.verify(result[0].token, process.env.SECRET, (err, decoded) => {
                if (err) {
                    res.status(400).json({
                         message: "Cannot verify token, expired"
                    });
                }
                else {
                    if (decoded === token) {
                        next(); // If user entered the same uuid verification token as what was encoded into the JWT, move to the next piece of middleware
                    }
                    else {
                        res.status(400).json({
                            message: "Invalid verification code"
                        });
                    }
                }
            });
        }
    });
}