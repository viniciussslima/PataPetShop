const mysql = require("../../db");

const SQL = {
  getProductByName: "SELECT * FROM product WHERE name = ?",
  checkProductOnCart:
    "SELECT * FROM cart_product WHERE product = ? AND user = ?",
  updateQty: "UPDATE cart_product SET qty = ? WHERE product = ? AND user = ?",
  addProductCart: "INSERT INTO cart_product SET ?",
};

exports.getProductByName = async (name) => {
  const [[response]] = await mysql.query(SQL.getProductByName, name);
  return response;
};

exports.checkProductOnCart = async (productName, username) => {
  const [[response]] = await mysql.query(SQL.checkProductOnCart, [
    productName,
    username,
  ]);
  return response;
};

exports.updateQty = (productName, username, qty) => {
  mysql.query(SQL.updateQty, [qty, productName, username]);
};

exports.addProductCart = (productName, username) => {
  mysql.query(SQL.addProductCart, {
    product: productName,
    user: username,
    qty: 1,
  });
};
