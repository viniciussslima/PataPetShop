const { getOneBuy, getOneBuyProducts } = require("../dao");
const { log } = require("../../../helpers");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    let buy = await getOneBuy(id);
    buy.products = await getOneBuyProducts(id);
    return res.status(200).send(buy);
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
