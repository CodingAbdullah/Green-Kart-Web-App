const express = require("express");
const userController = require("../controller/UserController");
const router = express.Router();
const auth = require("../middleware/auth");

router.post("/loginSubmitForm", userController.loginFormValidation);
router.post("/signUpForm", userController.signUpFormValidation);

module.exports = router;

