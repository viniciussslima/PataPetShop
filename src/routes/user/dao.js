const mysql = require("../../db");

const SQL = {
  getUserByUsername: "SELECT username, type FROM user WHERE username = ?",
  createUser: "INSERT INTO user SET ?",
  updateUser: "UPDATE user SET type = ? WHERE username = ?",
  getUsers: "SELECT username, type FROM user WHERE type <> 'client'",
  getUsersByType: "SELECT username, type FROM user WHERE type = ?",
  getUserType: "SELECT type FROM user WHERE username = ?",
  deleteUser: "DELETE FROM user WHERE username = ?",
  updateUserPassword: "UPDATE user SET password = ? WHERE username = ?",
  checkPassword:
    "SELECT username FROM user WHERE username = ? AND password = ?",
};

exports.getUserByUsername = async (username) => {
  let [[response]] = await mysql.query(SQL.getUserByUsername, [username]);
  return response;
};

exports.createUser = async (user) => {
  await mysql.query(SQL.createUser, user);
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
  let [response] = await mysql.query(SQL.getUsers);
  return response;
};

exports.getUsersByType = async (type) => {
  let [response] = await mysql.query(SQL.getUsersByType, [type]);
  return response;
};

exports.checkPassword = async (username, password) => {
  let [[response]] = await mysql.query(SQL.checkPassword, [username, password]);
  return response;
};

exports.updateUserPassword = async (username, password) => {
  await mysql.query(SQL.updateUserPassword, [password, username]);
};
