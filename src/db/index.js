const mysql2 = require("mysql2/promise");

module.exports = mysql2.createPool({
  host: process.env.MYSQL_URL,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "PataPetShop",
  connectionLimit: 10,
});
