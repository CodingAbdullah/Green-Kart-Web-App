require("dotenv").config({ path : '../.env' });
const jwt = require("jsonwebtoken");

exports.verifyJwtToken = (req, res, next) => {
    const token = req.body.headers.Authorization.split(" ")[1]; // Format is Authorization: Bearer <token>

    if (!token) {
        res.status(400).json({
            message: "No token found, authorization denied"
        });
    }
    else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err){
                res.status(400).json({
                    message: "Couldn't decode given token"
                });
            }
            else {
                // If verified, pass along the user data within the decoded part of the token to req and pass onto the next middleware
                let ogReq = JSON.parse(req.body.body);
                ogReq.user = decoded;
                req.body.body = ogReq;
                next();
            }
        });
    }
}