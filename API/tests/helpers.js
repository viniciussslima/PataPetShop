const server = require("../src/index");
const request = require("supertest");

exports.login = async (username, password) => {
  const response = await request(server)
    .post("/auth/login")
    .send({ username, password });
  return response.body.token;
};
