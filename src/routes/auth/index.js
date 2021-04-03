const express = require("express");
const router = express.Router();

const createController = require("./controller/createController");
const loginController = require("./controller/loginController");
const logoutController = require("./controller/logoutController");

router.post("/create", createController);
router.post("/login", loginController);
router.post("/logout", logoutController);

module.exports = router;
