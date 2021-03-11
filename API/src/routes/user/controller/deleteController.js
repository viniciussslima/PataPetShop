const { getUserType } = require("../../../middwares/dao");
const { deleteUser } = require("../dao");

module.exports = async (req, res) => {
  const { username } = req.body;
  try {
    if (username !== req.username) {
      const { type: userType } = await getUserType(req.username);
      if (userType !== "admin") {
        return res
          .status(401)
          .send({ message: "Você não tem permissão para isso" });
      }
    }
    await deleteUser(username);

    res.status(200).send();
  } catch (err) {
    res.status(500).send({ messsage: "Erro interno" });
  }
};
