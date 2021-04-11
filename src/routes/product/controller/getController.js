const { getProducts, searchProducts } = require("../dao");
const log = require("../../../helpers/log");

module.exports = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      let products = await getProducts();
      return res.status(200).send(products);
    }

    let products = await searchProducts(name);
    return res.status(200).send(products);
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
