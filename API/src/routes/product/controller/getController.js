const { getProducts, searchProducts } = require("../dao");

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
    console.log(err);
    return res.status(500).send();
  }
};
