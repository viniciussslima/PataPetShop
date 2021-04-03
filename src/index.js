require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? "test.env" : ".env",
});
const express = require("express");

const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT, () => {
    console.log(`API rodando na porta ${process.env.PORT}`);
  });
}

module.exports = app;
