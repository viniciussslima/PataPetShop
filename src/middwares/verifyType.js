const { getUserType } = require("./dao");
const log = require("../helpers/log");

module.exports = async (req, res, next, types) => {
  const { username } = req;
  try {
    const { type: userType } = await getUserType(username);

    if (types.includes(userType)) {
      return res
        .status(401)
        .send({ message: "Você não tem permissão para isso" });
    } else {
      next();
    }
  } catch (err) {
    res.status(500).send();
    return log.write(err);
  }
};
