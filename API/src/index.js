require("dotenv").config();

const express = require("express");

const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV) {
  app.listen(3001, () => {
    console.log("API rodando na porta 3001");
  });
}

module.exports = app;
