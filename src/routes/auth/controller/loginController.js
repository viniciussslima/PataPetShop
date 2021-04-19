const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const { getPassword } = require("../dao");
const { log } = require("../../../helpers");

module.exports = async (req, res) => {
  let { username, password } = req.body;

  try {
    let cryptoPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    delete req.body.password;

    const dbResponse = await getPassword(username);
    if (!dbResponse) {
      res.status(401).send({ message: "Esse usuário não existe" });
    }

    if (dbResponse.password === cryptoPassword) {
      let token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: 60 * 15,
      });
      res.status(200).send({ token });
    } else {
      res.status(401).send({ message: "Senha incorreta" });
    }
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
