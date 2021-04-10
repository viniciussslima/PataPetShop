const { deleteProduct } = require("../dao");
const log = require("../../../helpers/log");

module.exports = async (req, res) => {
  const { products } = req.body;
  try {
    if (products && products.length) {
      for (let product of products) {
        await deleteProduct(product);
      }
      return res.status(200).send();
    }

    return res
      .status(400)
      .send({ message: "Você tem que passar pelo menos um produto" });
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
