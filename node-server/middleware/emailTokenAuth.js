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
                    // Check to see if the uuid encoded into the JWT equates to what verification code user provided. If equal, proceed to next middleware
                    if (decoded.data === token) {
                        next();
                    }
                    else {
                        // Otherwise, reject password reset request
                        res.status(403).json({
                            message: "Invalid verification code"
                        });
                    }
                }
            });
        }
    });
}