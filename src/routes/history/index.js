const express = require("express");
const router = express.Router();

const validateSchema = require("../../middwares/validateSchema");
const jwtVerify = require("../../middwares/jwtVerify");
const { getOneSchema } = require("./schema");
const getAllController = require("./controller/getAllController");
const getOneController = require("./controller/getOneController");

router.get("/", jwtVerify, getAllController);
router.get(
  "/:id",
  jwtVerify,
  (req, res, next) => validateSchema(req, res, next, getOneSchema, "params"),
  getOneController
);

module.exports = router;
