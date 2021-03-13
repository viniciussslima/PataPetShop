const server = require("../src/index");
const request = require("supertest");

module.exports = async (username) => {
  const response = await request(server)
    .post("/auth/login")
    .send({ username, password: "1234" });
  return response.body.token;
};
