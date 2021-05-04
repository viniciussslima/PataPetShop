const express = require("express");
const router = express.Router();

const jwtVerify = require("../../middwares/jwtVerify");
const verifyType = require("../../middwares/verifyType");
const createController = require("./controller/createController");
const updateController = require("./controller/updateController");
const getController = require("./controller/getController");
const deleteController = require("./controller/deleteController");
const updatePasswordController = require("./controller/updatePasswordController");

router.post(
  "/",
  createController
);
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
router.put("/password", jwtVerify, updatePasswordController);
module.exports = router;
