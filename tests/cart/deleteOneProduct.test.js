const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint cart", () => {
  it("Fail", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .delete("/cart/product")
      .set("x-access-token", token)
      .send({
        product: "Racao de cachorro",
        qty: 2,
      });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message:
        "Não é possivel apagar uma quantidade superior ao que tem no carrinho",
    });
  });
});

describe("Endpoint cart", () => {
  it("Fail", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .delete("/cart/product")
      .set("x-access-token", token)
      .send({
        product: "ProdutoNaoAdiconado",
        qty: 1,
      });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "Não é possivel apagar um produto que não está no carrinho",
    });
  });
});

describe("Endpoint cart", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .delete("/cart/product")
      .set("x-access-token", token)
      .send({
        product: "Racao de cachorro",
        qty: 1,
      });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint cart", () => {
  it("Fail", async () => {
    const response = await request(server).delete("/cart/product").send({
      name: "Racao de cachorro",
    });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Usuário não autenticado",
    });
  });
});
