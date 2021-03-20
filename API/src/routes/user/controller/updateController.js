const { getUserByUsername, updateUser } = require("../dao");

module.exports = async (req, res) => {
  const { username, type } = req.body;
  const types = ["client", "vet", "seller", "washer", "admin"];
  if (!types.includes(type)) {
    return res
      .status(400)
      .send({ message: "O valor do campo type é inválido" });
  }
  try {
    const user = await getUserByUsername(username);
    if (user) {
      await updateUser(username, type);
    } else {
      return res.status(401).send({ message: "Esse usuário não existe" });
    }

    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Erro interno" });
  }
};
