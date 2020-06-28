const express = require("express");
const orderController = require("../controller/OrderController");
const router = express.Router();

router.get("/", orderController.getOrderByMembershipId);
router.get("/", orderController.getOrderByPurchaseId);
router.get("/", orderController.getOrderByTotalCost);

module.exports = router;