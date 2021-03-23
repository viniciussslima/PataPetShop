const { getProduct, updateProduct } = require("../dao");

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

    console.log(product.name, req.body);

    await updateProduct(product.name, req.body);

    return res.status(200).send();
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
};
