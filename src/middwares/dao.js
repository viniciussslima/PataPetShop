const mysql = require("../db");

const SQL = {
  getUserType: "SELECT type FROM user WHERE username = ?",
};

exports.getUserType = async (username) => {
  let [[response]] = await mysql.query(SQL.getUserType, [username]);
  return response;
};
