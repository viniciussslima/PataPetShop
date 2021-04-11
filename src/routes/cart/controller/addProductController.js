const {
  getProductByName,
  checkProductOnCart,
  updateQty,
  addProductCart,
} = require("../dao");
const log = require("../../../helpers/log");

module.exports = async (req, res) => {
  const { product } = req.body;
  try {
    let existsProduct = await getProductByName(product);
    if (!existsProduct) {
      return res.status(401).send({
        message: "Esse produto não existe",
      });
    }

    if (existsProduct.stock > 0) {
      let existsProductOnCart = await checkProductOnCart(product, req.username);
      if (existsProductOnCart) {
        await updateQty(product, req.username, existsProductOnCart.qty + 1);
      } else {
        await addProductCart(product, req.username);
      }

      return res.status(200).send();
    }
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
