const express = require("express");
const orderController = require("../controller/OrderController");
const router = express.Router();

router.get("/orderByMembershipId", orderController.getOrderByMembershipId);

module.exports = router;