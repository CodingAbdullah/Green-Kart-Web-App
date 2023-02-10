const User = require("../model/User");

exports.verifyUser = (req, res, next) => {
    const { email } = JSON.parse(req.body.body);

    // Check if the email passed in by the user exists
    User.find({ email }, (err, result) => {
        if (err) {
            res.status(401).json({
                message: "Cannot query for Users"
            });
        }
        else {
            if (result.length > 0) {
                // A user with this email address exists
                next(); // Pass onto the next piece of middleware
            }
            else {
                res.status(403).json({
                    message: "Invalid email, no such User exists"
                });
            }
        }
    });
}