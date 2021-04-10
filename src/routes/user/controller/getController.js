const { getUsers, getUsersByType } = require("../dao");
const log = require("../../../helpers/log");

module.exports = async (req, res) => {
  const { type } = req.query;
  try {
    if (type) {
      const types = ["vet", "seller", "washer", "admin"];
      if (!types.includes(type)) {
        return res
          .status(400)
          .send({ message: "O valor do campo type é inválido" });
      } else {
        const users = await getUsersByType(type);
        return res.status(200).send(users);
      }
    }
    const users = await getUsers();

    res.status(200).send(users);
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
