const { getUserType, getUserByUsername, deleteUser } = require("../dao");
const log = require("../../../helpers/log");

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
    const user = await getUserByUsername(username);
    if (user) {
      await deleteUser(username);
    } else {
      return res.status(401).send({ message: "Esse usuário não existe" });
    }

    res.status(200).send();
  } catch (err) {
    res.status(500).send();
    return log.write(err.toString() + "\n");
  }
};
