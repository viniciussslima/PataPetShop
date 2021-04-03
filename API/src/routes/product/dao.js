const mysql = require("../../db");

const SQL = {
  createProduct: "INSERT INTO product SET ?",
  getProduct: "SELECT * FROM product WHERE name = ?",
  getProducts: "SELECT * FROM product",
  searchProducts: "SELECT * FROM product WHERE name LIKE ?",
  deleteProducts: "DELETE FROM product WHERE name = ?",
  updateProduct: "UPDATE product SET ? WHERE name = ?",
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

exports.deleteProduct = async (name) => {
  await mysql.query(SQL.deleteProducts, [name]);
};

exports.updateProduct = async (name, product) => {
  await mysql.query(SQL.updateProduct, [product, name]);
};
