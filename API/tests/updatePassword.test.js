const server = require("../src/index");
const request = require("supertest");
const { login } = require("./helpers");

describe("Endpoint /user/password", () => {
  it("Success", async () => {
    const token = await login("teste", "1234");
    const response = await request(server)
      .put("/user/password")
      .set("x-access-token", token)
      .send({ password: "1234", newPassword: "123456" });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint /user/password", () => {
  it("Fail", async () => {
    const token = await login("teste", "123456");
    const response = await request(server)
      .put("/user/password")
      .set("x-access-token", token)
      .send({ password: "1234", newPassword: "123456" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: "Senha incorreta" });
  });
});
