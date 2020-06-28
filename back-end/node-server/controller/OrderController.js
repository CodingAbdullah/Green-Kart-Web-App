const express = require("express");
const Order = require("../model/Order");

exports.getOrderByMembershipId = (req, res) => {
    const membership_id = req.body.membership_id;
    res.json({order : JSON.parse(Order.findOne({membership_id : {$eq : membership_id}}))});
}

exports.getOrderByPurchaseId = (req, res) => {
    const purchase_id = req.body.purchase_id;
    res.json({order: JSON.parse(Order.findOne({purchase_id : {$eq: purchase_id}}))});
}

exports.getOrderByTotalCost = (req, res) => {
    const total_cost = req.body.total_cost;
    res.json({order : JSON.parse(Order.findOne({total_cost: {$eq : total_cost}}))});
}