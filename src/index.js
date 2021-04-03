require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? "test.env" : ".env",
});
const express = require("express");

const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV !== "test") {
  app.listen(3001, () => {
    console.log("API rodando na porta 3001");
  });
}

module.exports = app;
