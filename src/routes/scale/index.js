const express = require("express");
const router = express.Router();

const jwtVerify = require("../../middwares/jwtVerify");
const verifyType = require("../../middwares/verifyType");
const createController = require("./controller/createController");
const getController = require("./controller/getController");

router.post(
  "/",
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  createController
);
router.get("/:employee", jwtVerify, getController);

module.exports = router;
