const crypto = require("crypto");

const { checkPassword, updateUserPassword } = require("../dao");
const log = require("../../../helpers/log");

module.exports = async (req, res) => {
  const { password, newPassword } = req.body;
  try {
    let cryptoOldPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const user = await checkPassword(req.username, cryptoOldPassword);
    delete req.body.password;
    if (user) {
      let cryptoPassword = crypto
        .createHash("sha256")
        .update(newPassword)
        .digest("hex");

      delete req.body.newPassword;
      await updateUserPassword(req.username, cryptoPassword);
    } else {
      return res.status(401).send({ message: "Senha incorreta" });
    }

    res.status(200).send();
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
