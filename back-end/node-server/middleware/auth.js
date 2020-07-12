const express = require("express");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(400).json({message: "INVALID TOKEN, authorization denied"});
    }
    else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err){
                return res.status(400).json({message: "INVALID decoded"});
            }
            else {
                req.user = decoded.newUser;
                next();
            }
        });
    }
}