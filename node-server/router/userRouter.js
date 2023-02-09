const express = require("express");
const userController = require("../controller/UserController");
const router = express.Router();

// router.get("/auth", auth, userController.getAuthorization);
router.post("/login", userController.loginFormValidation);
router.post("/signup", userController.signUpFormValidation);

module.exports = router;