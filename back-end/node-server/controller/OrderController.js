const express = require("express");
const Order = require("../model/Order");

exports.getOrderByMembershipId = (req, res) => {
    res.json({
        order : JSON.parse(Order.findOne({membership_id : {$eq : 1}}))
    });
}