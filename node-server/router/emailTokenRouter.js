const express = require("express");
const userAuthMiddleware = require("../middleware/userAuth"); 
const emailTokenController = require("../controller/EmailTokenController");
const router = express.Router();

// Verify if user exists and is a GMAIL account before sending auth token
router.post("/add-email-token", userAuthMiddleware.verifyUser, emailTokenController.addEmailToken);

module.exports = router;