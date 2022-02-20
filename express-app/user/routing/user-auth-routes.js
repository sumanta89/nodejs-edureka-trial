const express = require("express");
const router = express.Router();
const userAuthController = require("../controller/userAuthController");
router.post("/register", userAuthController.register);
router.post("/login", userAuthController.login);
router.post("/logout", userAuthController.logout);

module.exports = router;