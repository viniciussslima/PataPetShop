const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint cart", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .get("/cart")
      .set("x-access-token", token)
      .send();

    let expectArray = [
      {
        name: "Racao de cachorro",
        price: 1.3,
        qty: 1,
      },
    ];

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectArray);
  });
});

describe("Endpoint cart", () => {
  it("Fail", async () => {
    const response = await request(server).get("/cart").send();

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Usuário não autenticado",
    });
  });
});
