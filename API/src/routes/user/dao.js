const mysql = require("../../db");

const SQL = {
  updateUser: "UPDATE user SET type = ? WHERE username = ?",
  getUsers: "SELECT username, type FROM user WHERE type <> 'client'",
  getUsersByType: "SELECT username, type FROM user WHERE type = ?",
};

exports.updateUser = async (username, type) => {
  await mysql.query(SQL.updateUser, [type, username]);
};

exports.getUsers = async () => {
  let [[response]] = await mysql.query(SQL.getUsers);
  return response;
};

exports.getUsersByType = async (type) => {
  let [response] = await mysql.query(SQL.getUsersByType, [type]);
  return response;
};
