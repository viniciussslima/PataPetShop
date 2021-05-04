const express = require("express");
const router = express.Router();

const jwtVerify = require("../../middwares/jwtVerify");
const validateSchema = require("../../middwares/validateSchema");
const verifyType = require("../../middwares/verifyType");
const {
  createSchema,
  updateUserSchema,
  updatePasswordSchema,
  getUserSchema,
} = require("./schema");
const createController = require("./controller/createController");
const updateController = require("./controller/updateController");
const getController = require("./controller/getController");
const deleteController = require("./controller/deleteController");
const updatePasswordController = require("./controller/updatePasswordController");

router.post(
  "/",
  (req, res, next) => validateSchema(req, res, next, createSchema),
  createController
);
router.put(
  "/",
  (req, res, next) => validateSchema(req, res, next, updateUserSchema),
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  updateController
);
router.get(
  "/",
  (req, res, next) => validateSchema(req, res, next, getUserSchema, query),
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  getController
);
router.delete("/", jwtVerify, deleteController);
router.put(
  "/password",
  (req, res, next) => validateSchema(req, res, next, updatePasswordSchema),
  jwtVerify,
  updatePasswordController
);
module.exports = router;
