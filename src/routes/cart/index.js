const express = require("express");
const router = express.Router();

const jwtVerify = require("../../middwares/jwtVerify");
const addProductController = require("./controller/addProductController");
const getController = require("./controller/getController");
const deleteAllProductsController = require("./controller/deleteAllProductsController");
const deleteOneProductController = require("./controller/deleteOneProductController");
const buyController = require("./controller/buyController");

router.post("/", jwtVerify, addProductController);
router.get("/", jwtVerify, getController);
router.delete("/", jwtVerify, deleteAllProductsController);
router.delete("/product", jwtVerify, deleteOneProductController);
router.post("/buy", jwtVerify, buyController);

module.exports = router;
