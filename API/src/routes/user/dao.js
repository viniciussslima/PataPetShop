const mysql = require("../../db");

const SQL = {
  updateUser: "UPDATE user SET type = ? WHERE username = ?",
};

exports.updateUser = async (username, type) => {
  await mysql.query(SQL.updateUser, [type, username]);
};
