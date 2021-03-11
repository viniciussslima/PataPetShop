const express = require("express");
const router = express.Router();

const jwtVerify = require("../../middwares/jwtVerify");
const verifyType = require("../../middwares/verifyType");
const updateController = require("./controller/updateController");
const getController = require("./controller/getController");
const deleteController = require("./controller/deleteController");

router.put(
  "/",
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  updateController
);
router.get(
  "/",
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  getController
);
router.delete("/", jwtVerify, deleteController);

module.exports = router;
