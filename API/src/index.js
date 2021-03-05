require("dotenv").config();

const express = require("express");

const routes = require("./routes");

const app = express();
app.use(routes);
app.use(express.json());

app.listen(3001, () => {
  console.log("API rodando na porta 3001");
});
