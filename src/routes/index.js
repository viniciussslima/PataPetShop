const express = require("express");
const router = express.Router();

const auth = require("./auth");
const user = require("./user");
const product = require("./product");
const cart = require("./cart");
const history = require("./history");
const scale = require("./scale");
const scheduling = require("./scheduling");

router.use("/auth", auth);
router.use("/user", user);
router.use("/product", product);
router.use("/cart", cart);
router.use("/history", history);
router.use("/scale", scale);
router.use("/scheduling", scheduling);

module.exports = router;
