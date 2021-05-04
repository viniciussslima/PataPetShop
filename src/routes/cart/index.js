const express = require("express");
const router = express.Router();

const validateSchema = require("../../middwares/validateSchema");
const jwtVerify = require("../../middwares/jwtVerify");
const { createSchema, deleteOneSchema } = require("./schema");
const addProductController = require("./controller/addProductController");
const getController = require("./controller/getController");
const deleteAllProductsController = require("./controller/deleteAllProductsController");
const deleteOneProductController = require("./controller/deleteOneProductController");
const buyController = require("./controller/buyController");

router.post(
  "/",
  (req, res, next) => validateSchema(req, res, next, createSchema),
  jwtVerify,
  addProductController
);
router.get("/", jwtVerify, getController);
router.delete("/", jwtVerify, deleteAllProductsController);
router.delete(
  "/product",
  (req, res, next) => validateSchema(req, res, next, deleteOneSchema),
  jwtVerify,
  deleteOneProductController
);
router.post("/buy", jwtVerify, buyController);

module.exports = router;
