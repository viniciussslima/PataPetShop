const express = require("express");
const router = express.Router();

const jwtVerify = require("../../middwares/jwtVerify");
const createController = require("./controller/createController");
const getController = require("./controller/getController");

router.post("/", jwtVerify, createController);
router.get("/", jwtVerify, getController);

module.exports = router;
