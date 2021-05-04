const express = require("express");
const router = express.Router();

const loginController = require("./controller/loginController");
const logoutController = require("./controller/logoutController");

router.post("/login", loginController);
router.post("/logout", logoutController);

module.exports = router;
