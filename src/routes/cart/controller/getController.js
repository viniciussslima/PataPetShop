const { getCartProducts } = require("../dao");
const { log } = require("../../../helpers");

module.exports = async (req, res) => {
  try {
    let cart = await getCartProducts(req.username);
    return res.status(200).send(cart);
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
