const mysql = require("../../db");

const SQL = {
  getHistory: "SELECT * FROM buy WHERE user = ?",
  getOneBuy: "SELECT * FROM buy WHERE id = ?",
  getOneBuyProducts: "SELECT product, qty FROM buy_products WHERE buy = ?",
};

exports.getHistory = async (user) => {
  const [response] = await mysql.query(SQL.getHistory, user);
  return response;
};

exports.getOneBuy = async (id) => {
  const [[response]] = await mysql.query(SQL.getOneBuy, id);
  return response;
};

exports.getOneBuyProducts = async (id) => {
  const [response] = await mysql.query(SQL.getOneBuyProducts, id);
  return response;
};
