const mysql = require("../../db");

const SQL = {
  createUser: "INSERT INTO user SET ?",
};

exports.createUser = async (user) => {
  await mysql.query(SQL.createUser, user);
};
