const mysql = require("../../db");

const SQL = {
  updateUser: "UPDATE user SET type = ? WHERE username = ?",
  getUsers: "SELECT username, type FROM user WHERE type <> 'client'",
  getUsersByType: "SELECT username, type FROM user WHERE type = ?",
  getUserType: "SELECT type FROM user WHERE username = ?",
  deleteUser: "DELETE FROM user WHERE username = ?",
};

exports.updateUser = async (username, type) => {
  await mysql.query(SQL.updateUser, [type, username]);
};

exports.deleteUser = async (username) => {
  await mysql.query(SQL.deleteUser, [username]);
};

exports.getUserType = async (username) => {
  let [[response]] = await mysql.query(SQL.getUserType, [username]);
  return response;
};

exports.getUsers = async () => {
  let [[response]] = await mysql.query(SQL.getUsers);
  return response;
};

exports.getUsersByType = async (type) => {
  let [response] = await mysql.query(SQL.getUsersByType, [type]);
  return response;
};
