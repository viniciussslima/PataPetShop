const express = require("express");
const router = express.Router();

const jwtVerify = require("../../middwares/jwtVerify");
const addProductController = require("./controller/addProductController");
const getController = require("./controller/getController");

router.post("/", jwtVerify, addProductController);
router.get("/", jwtVerify, getController);

module.exports = router;
