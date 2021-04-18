const { getHistory } = require("../dao");
const { log } = require("../../../helpers");

module.exports = async (req, res) => {
  try {
    let history = await getHistory(req.username);
    return res.status(200).send(history);
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
