const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint cart", () => {
  it("Fail", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .post("/cart/buy")
      .set("x-access-token", token)
      .send();

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "O produto 'Racao de cachorro' não está disponível no estoque",
    });
  });
});
