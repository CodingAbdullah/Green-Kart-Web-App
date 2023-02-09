const express = require("express");
const orderController = require("../controller/OrderController");
const router = express.Router();
const middleware = require('../middleware/auth');

router.get("/order-history", middleware.auth, orderController.getOrderHistory);
router.post("/order-checkout", middleware.auth, orderController.orderCheckout);

module.exports = router;