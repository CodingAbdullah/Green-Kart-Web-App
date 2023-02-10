const express = require("express");
const orderController = require("../controller/OrderController");
const router = express.Router();
const middleware = require('../middleware/auth');

router.post("/order-history", middleware.auth, orderController.getOrderHistory);
router.post("/order-checkout", middleware.auth, orderController.orderCheckout);

module.exports = router;