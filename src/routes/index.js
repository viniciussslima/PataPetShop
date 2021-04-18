const express = require("express");
const router = express.Router();

const auth = require("./auth");
const user = require("./user");
const product = require("./product");
const cart = require("./cart");
const history = require("./history");

router.use("/auth", auth);
router.use("/user", user);
router.use("/product", product);
router.use("/cart", cart);
router.use("/history", history);

module.exports = router;
