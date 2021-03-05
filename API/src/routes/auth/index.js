const express = require("express");
const router = express.Router();

const createController = require("./controller/createController");

router.post("/create", createController);

module.exports = router;
