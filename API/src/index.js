require("dotenv").config();

const express = require("express");

const app = express();

app.listen(3001, () => {
  console.log("API rodando na porta 3001");
});