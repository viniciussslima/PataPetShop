const express = require("express");
const router = express.Router();

const jwtVerify = require("../../middwares/jwtVerify");
const addProductController = require("./controller/addProductController");

router.post("/", jwtVerify, addProductController);

module.exports = router;
