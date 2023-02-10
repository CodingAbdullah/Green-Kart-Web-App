const express = require("express");
const User = require("../model/User");

exports.verifyUser = (req, res, next) => {
    const { email } = JSON.parse(req.body.body);

    // Check if the email passed in by the user exists
    User.find({ email }, (err, result) => {
        if (err) {
            res.status(401).json({
                message: "User with this email address does not exist"
            });
        }
        else {
            if (result.length > 0) {
                // A user with this email address exists
                next(); // Pass onto the next piece of middleware
            }
        }
    });
}