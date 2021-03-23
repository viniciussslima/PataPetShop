const mysql = require("../../db");

const SQL = {
  createProduct: "INSERT INTO product SET ?",
  getProduct: "SELECT * FROM product WHERE name = ?",
};

exports.createProduct = async (product) => {
  await mysql.query(SQL.createProduct, product);
};

exports.getProduct = async (name) => {
  const [[response]] = await mysql.query(SQL.getProduct, [name]);
  return response;
};
