const crypto = require("crypto");
const { createUser } = require("../dao");

module.exports = async (req, res) => {
  let { username, password } = req.body;
  try {
    let cryptoPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    await createUser({ username, password: cryptoPassword });

    return res.status(200).send();
  } catch (err) {
    return res.status(400).send("Esse usuário já existe");
  }
};
