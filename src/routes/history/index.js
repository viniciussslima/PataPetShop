const express = require("express");
const router = express.Router();

const jwtVerify = require("../../middwares/jwtVerify");
const getAllController = require("./controller/getAllController");
const getOneController = require("./controller/getOneController");

router.get("/", jwtVerify, getAllController);
router.get("/:id", jwtVerify, getOneController);

module.exports = router;
