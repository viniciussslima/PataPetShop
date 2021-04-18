const mysql = require("../../db");

const SQL = {
  getProductByName: "SELECT * FROM product WHERE name = ?",
  checkProductOnCart:
    "SELECT * FROM cart_product WHERE product = ? AND user = ?",
  updateQty: "UPDATE cart_product SET qty = ? WHERE product = ? AND user = ?",
  addProductCart: "INSERT INTO cart_product SET ?",
  getCartProducts: `SELECT product.name, product.price, cart_product.qty FROM cart_product 
  INNER JOIN product ON product.name=cart_product.product
  WHERE user = ?`,
  deleteAllProducts: "DELETE FROM cart_product WHERE user = ?",
  deleteOneProduct: "DELETE FROM cart_product WHERE user = ? AND product = ?",
  getCart: `SELECT product.name, product.description,product.price * cart_product.qty AS value, 
  cart_product.qty, product.stock
  FROM product
  INNER JOIN cart_product ON product.name=cart_product.product
  INNER JOIN user ON user.username=cart_product.user
  WHERE user.username = ?`,
  buy: "INSERT INTO buy SET ?",
  addProductOnBuy: "INSERT INTO buy_products SET ? ",
  updateStock: "UPDATE product SET stock = ? WHERE name = ?",
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

exports.getCartProducts = async (username) => {
  let [response] = await mysql.query(SQL.getCartProducts, username);
  return response;
};

exports.deleteAllProducts = async (username) => {
  await mysql.query(SQL.deleteAllProducts, username);
};

exports.deleteOneProduct = async (username, product) => {
  await mysql.query(SQL.deleteOneProduct, [username, product]);
};

exports.getCart = async (username) => {
  let [response] = await mysql.query(SQL.getCart, username);
  return response;
};

exports.buyCart = async (buy, products) => {
  await mysql.query(SQL.buy, buy);
  for (product of products) {
    let newProduct = {
      buy: buy.id,
      product: product.name,
      qty: product.qty,
    };
    await mysql.query(SQL.addProductOnBuy, newProduct);
  }
};
exports.updateStock = async (products) => {
  for (product of products) {
    await mysql.query(SQL.updateStock, [
      product.stock - product.qty,
      product.name,
    ]);
  }
};
