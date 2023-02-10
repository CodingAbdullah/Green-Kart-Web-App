const express = require("express");
const EmailToken = require('../model/EmailToken');

exports.verifyEmailtoken = (req, res, next) => {
    const { email, token } = JSON.parse(req.body.body);
}