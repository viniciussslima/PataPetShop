const mysql = require("../../db");

const SQL = {
  createUser: "INSERT INTO user SET ?",
  getPassword: "SELECT password FROM user WHERE username = ?",
};

exports.createUser = async (user) => {
  await mysql.query(SQL.createUser, user);
};
