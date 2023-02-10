const express = require("express");
const userController = require("../controller/UserController");
const userMiddleware = require("../middleware/jwtAuth");
const emailTokenMiddleware = require('../middleware/emailTokenAuth');
const router = express.Router();

router.post("/login", userController.loginFormValidation);
router.post("/signup", userController.signUpFormValidation);
router.post("/update-user-information", userMiddleware.verifyJwtToken, userController.updateUserInformation); // Will require auth middleware for this request
router.post("/update-user-password", emailTokenMiddleware.verifyEmailtoken, userController.updateUserPassword); // User not logged in, therefore no jwt auth required, but email token auth is required

module.exports = router;