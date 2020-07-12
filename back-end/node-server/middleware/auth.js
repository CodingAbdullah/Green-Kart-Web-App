const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("dotenv").config({path : '../.env'});

module.exports  = auth = (req, res, next) => {

    users = {
        users: req.user.id
    }

    jwt.sign({ users : req.user.id}, process.env.SECRET,  {expiresIn : 3600});
    next();
}