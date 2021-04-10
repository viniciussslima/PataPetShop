const crypto = require("crypto");

const { getUserByUsername, createUser } = require("../dao");
const log = require("../../../helpers/log");

module.exports = async (req, res) => {
  let { username, password } = req.body;
  try {
    let user = await getUserByUsername(username);
    if (user) {
      return res.status(409).send({ message: "Esse usuário já existe" });
    }
    let cryptoPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    delete req.body.password;

    await createUser({
      username,
      password: cryptoPassword,
      type: "client",
    });

    return res.status(200).send();
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
