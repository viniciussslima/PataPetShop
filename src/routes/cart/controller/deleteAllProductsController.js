const { deleteAllProducts } = require("../dao");
const log = require("../../../helpers/log");

module.exports = async (req, res) => {
  try {
    await deleteAllProducts(req.username);
    return res.status(200).send();
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
