const { checkProductOnCart, deleteOneProduct, updateQty } = require("../dao");
const log = require("../../../helpers/log");

module.exports = async (req, res) => {
  const { product, qty } = req.body;
  try {
    let productOnCart = await checkProductOnCart(product, req.username);
    if (productOnCart) {
      if (productOnCart.qty >= qty) {
        if (productOnCart.qty === qty) {
          await deleteOneProduct(req.username, product);
        } else {
          await updateQty(product, req.username, productOnCart.qty - qty);
        }
        return res.status(200).send();
      } else {
        return res.status(400).send({
          message:
            "Não é possivel apagar uma quantidade superior ao que tem no carrinho",
        });
      }
    }

    return res.status(400).send({
      message: "Não é possivel apagar um produto que não está no carrinho",
    });
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
