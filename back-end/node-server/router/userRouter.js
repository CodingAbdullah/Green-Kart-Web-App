const express = require("express");
const userController = require("../controller/UserController");
const router = express.Router();

router.get("/", userController.homePageFunction);
router.post("/loginSubmitForm", userController.loginFormValidation);
router.post("/signupform", userController.signUpFormValidation);

module.exports = router;

