const express = require("express");
const userController = require("../controller/UserController");
const router = express.Router();

router.get("/", userController.homePageFunction);
//router.post("/loginSubmitForm", userController.loginFormValidation);

module.exports = router;