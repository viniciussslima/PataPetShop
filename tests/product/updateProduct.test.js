const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint /product", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .put("/product")
      .set("x-access-token", token)
      .send({
        name: "produto1",
        description: "descrição",
        price: 10,
        stock: 10,
      });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint /product", () => {
  it("Fail", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .put("/product")
      .set("x-access-token", token)
      .send({
        name: "produtoNãoExistente",
        description: "descrição",
        price: 10,
        stock: 10,
      });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "Esse produto não existe",
    });
  });
});

describe("Endpoint /product", () => {
  it("Fail", async () => {
    const token = await login("teste2", "1234");
    const response = await request(server)
      .put("/product")
      .set("x-access-token", token)
      .send({
        name: "produto2",
        description: "descrição",
        price: 10,
        stock: 10,
      });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Você não tem permissão para isso",
    });
  });
});
