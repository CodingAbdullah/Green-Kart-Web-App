const express = require("express");
const userController = require("../controller/UserController");
const auth = require("../middleware/auth");
const router = express.Router();

// router.get("/auth", auth, userController.getAuthorization);
router.post("/login", userController.loginFormValidation);
router.post("/signup", userController.signUpFormValidation);
router.post("/update-user-information", auth.auth, userController.updateUserInformation); // Will require auth middleware for this request

module.exports = router;