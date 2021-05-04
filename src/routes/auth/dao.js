const mysql = require("../../db");

const SQL = {
  getPassword: "SELECT password FROM user WHERE username = ?",
};

exports.getPassword = async (username) => {
  let [[response]] = await mysql.query(SQL.getPassword, [username]);
  return response;
};
