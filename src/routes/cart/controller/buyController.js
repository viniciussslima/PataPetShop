const { v4: uuidv4 } = require("uuid");

const { getCart, buyCart, deleteAllProducts, updateStock } = require("../dao");
const log = require("../../../helpers/log");

module.exports = async (req, res) => {
  try {
    let cart = await getCart(req.username);
    if (!cart.length) {
      return res.status(406).send({
        message: "O carrinho está vazio",
      });
    }

    let stop = cart.some((product) => {
      if (product.stock < product.qty) {
        if (product.stock < 0) {
          res.status(400).send({
            message: `O produto '${product.name}' não está disponível no estoque`,
          });
        } else {
          res.status(400).send({
            message: `O produto '${product.name}' só tem ${product.stock} unidades`,
          });
        }
        return true;
      }
      return false;
    });

    if (stop) {
      return;
    }

    let buy = {
      id: uuidv4(),
      value: 0,
    };

    cart.forEach((element) => {
      buy.value += element.value;
    });
    buy.value = Number(buy.value).toFixed(2);

    await buyCart(buy, cart, req.username);
    await deleteAllProducts(req.username);
    await updateStock(cart);

    return res.status(200).send();
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
