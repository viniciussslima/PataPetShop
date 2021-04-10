const mysql = require("../../db");

const SQL = {
  getUserByUsername: "SELECT username, type FROM user WHERE username = ?",
  createUser: "INSERT INTO user SET ?",
  getPassword: "SELECT password FROM user WHERE username = ?",
};

exports.getUserByUsername = async (username) => {
  let [[response]] = await mysql.query(SQL.getUserByUsername, [username]);
  return response;
};

exports.createUser = async (user) => {
  await mysql.query(SQL.createUser, user);
};

exports.getPassword = async (username) => {
  let [[response]] = await mysql.query(SQL.getPassword, [username]);
  return response;
};
