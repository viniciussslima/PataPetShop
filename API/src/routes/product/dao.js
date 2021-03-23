const mysql = require("../../db");

const SQL = {
  createProduct: "INSERT INTO product SET ?",
  getProduct: "SELECT * FROM product WHERE name = ?",
  getProducts: "SELECT * FROM product",
  searchProducts: "SELECT * FROM product WHERE name LIKE ?",
};

exports.createProduct = async (product) => {
  await mysql.query(SQL.createProduct, product);
};

exports.getProduct = async (name) => {
  const [[response]] = await mysql.query(SQL.getProduct, [name]);
  return response;
};

exports.searchProducts = async (name) => {
  name = `%${name}%`;
  const [response] = await mysql.query(SQL.searchProducts, name);
  return response;
};

exports.getProducts = async () => {
  const [response] = await mysql.query(SQL.getProducts);
  return response;
};
