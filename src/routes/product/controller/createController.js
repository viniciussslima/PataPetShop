const { getProduct, createProduct } = require("../dao");
const log = require("../../../helpers/log");

module.exports = async (req, res) => {
  const { name } = req.body;
  try {
    let product = await getProduct(name);
    if (!product) {
      await createProduct(req.body);
      return res.status(200).send();
    }
    return res.status(409).send({
      message: "Esse produto já existe",
    });
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
