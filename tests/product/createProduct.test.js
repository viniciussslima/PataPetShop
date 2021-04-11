const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint product", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .post("/product/")
      .set("x-access-token", token)
      .send({
        name: "Racao de cachorro",
        description: "Racao sabor frango",
        price: 130,
        stock: 10,
      });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint product", () => {
  it("Fail", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .post("/product")
      .set("x-access-token", token)
      .send({
        name: "Racao de cachorro",
        description: "Racao sabor frango",
        price: 55,
        stock: 10,
      });

    expect(response.status).toBe(409);
    expect(response.body).toEqual({
      message: "Esse produto já existe",
    });
  });
});

describe("Endpoint product", () => {
  it("Fail", async () => {
    const token = await login("teste2", "1234");
    const response = await request(server)
      .post("/product")
      .set("x-access-token", token)
      .send({
        name: "Racao de cachorro",
        description: "Racao sabor frango",
        price: 55,
        stock: 10,
      });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Você não tem permissão para isso",
    });
  });
});
