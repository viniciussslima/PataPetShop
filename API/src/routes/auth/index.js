const express = require("express");
const router = express.Router();

const createController = require("./controller/createController");
const loginController = require("./controller/loginController");

router.post("/create", createController);
router.post("/login", loginController);

module.exports = router;
