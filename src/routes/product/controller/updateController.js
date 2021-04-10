const { getProduct, updateProduct } = require("../dao");
const log = require("../../../helpers/log");

module.exports = async (req, res) => {
  const { name } = req.body;
  try {
    let product = await getProduct(name);
    if (!product) {
      return res.status(400).send({
        message: "Esse produto não existe",
      });
    }

    delete req.body.name;

    await updateProduct(product.name, req.body);

    return res.status(200).send();
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
