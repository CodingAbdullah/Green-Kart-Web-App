const express = require("express");
const orderController = require("../controller/OrderController");
const router = express.Router();
const authMiddleware = require('../middleware/jwtAuth');

router.post("/order-history", authMiddleware.verifyJwtToken, orderController.getOrderHistory);
router.post("/order-checkout", authMiddleware.verifyJwtToken, orderController.orderCheckout);

module.exports = router;