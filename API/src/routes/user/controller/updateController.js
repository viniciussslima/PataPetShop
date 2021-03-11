const { updateUser } = require("../dao");

module.exports = async (req, res) => {
  const { username, type } = req.body;
  const types = ["client", "vet", "seller", "washer", "admin"];
  if (!types.includes(type)) {
    return res
      .status(400)
      .send({ messsage: "O valor do campo type é inválido" });
  }
  try {
    await updateUser(username, type);

    res.status(200).send();
  } catch (err) {
    res.status(500).send({ messsage: "Erro interno" });
  }
};
