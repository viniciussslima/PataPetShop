const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint /product", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .delete("/product")
      .set("x-access-token", token)
      .send({ products: ["produto1"] });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint /product", () => {
  it("Fail", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .delete("/product")
      .set("x-access-token", token)
      .send({ products: [] });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "Você tem que passar pelo menos um produto",
    });
  });
});

describe("Endpoint /product", () => {
  it("Success", async () => {
    const token = await login("teste2", "1234");
    const response = await request(server)
      .delete("/product")
      .set("x-access-token", token)
      .send({ products: ["produto1"] });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Você não tem permissão para isso",
    });
  });
});
