const express = require("express");
const router = express.Router();

const jwtVerify = require("../../middwares/jwtVerify");
const verifyType = require("../../middwares/verifyType");
const createController = require("./controller/createController");
const getController = require("./controller/getController");
const deleteController = require("./controller/deleteController");
const updateController = require("./controller/updateController");

router.post(
  "/",
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  createController
);
router.get("/", getController);
router.delete(
  "/",
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  deleteController
);
router.put(
  "/",
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  updateController
);

module.exports = router;
