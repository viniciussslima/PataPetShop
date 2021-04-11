const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint cart", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .post("/cart")
      .set("x-access-token", token)
      .send({
        product: "Ração de cachorro",
      });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint cart", () => {
  it("Fail", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .post("/cart")
      .set("x-access-token", token)
      .send({
        product: "ProdutoNaoExistente",
      });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Esse produto não existe",
    });
  });
});

describe("Endpoint cart", () => {
  it("Fail", async () => {
    const response = await request(server).post("/cart").send({
      name: "Ração de cachorro",
    });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Usuário não autenticado",
    });
  });
});
