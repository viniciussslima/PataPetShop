const express = require("express");
const router = express.Router();

const validateSchema = require("../../middwares/validateSchema");
const jwtVerify = require("../../middwares/jwtVerify");
const verifyType = require("../../middwares/verifyType");
const {
  createSchema,
  updateSchema,
  getSchema,
  deleteSchema,
} = require("./schema");
const createController = require("./controller/createController");
const getController = require("./controller/getController");
const deleteController = require("./controller/deleteController");
const updateController = require("./controller/updateController");
const { query } = require("../../db");

router.post(
  "/",
  (req, res, next) => validateSchema(req, res, next, createSchema),
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  createController
);
router.get(
  "/",
  (req, res, next) => validateSchema(req, res, next, getSchema, "query"),
  getController
);
router.delete(
  "/",
  (req, res, next) => validateSchema(req, res, next, deleteSchema),
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  deleteController
);
router.put(
  "/",
  (req, res, next) => validateSchema(req, res, next, updateSchema),
  jwtVerify,
  (req, res, next) =>
    verifyType(req, res, next, ["client", "vet", "seller", "washer"]),
  updateController
);

module.exports = router;
