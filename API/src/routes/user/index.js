const express = require("express");
const router = express.Router();

const jwtVerify = require("../../middwares/jwtVerify");
const verifyType = require("../../middwares/verifyType");
const updateController = require("./controller/updateController");
router.put(
  "/",
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  updateController
);
module.exports = router;
