const server = require("../../src/index");
const request = require("supertest");

describe("Endpoint product", () => {
  it("Success", async () => {
    const response = await request(server).get("/product").send();

    let expectArray = [
      {
        name: "produto1",
        description: "descricao1",
        price: 10.1,
        stock: 10,
      },
      {
        name: "produto2",
        description: "descricao2",
        price: 15,
        stock: 50,
      },
    ];

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectArray);
  });
});

describe("Endpoint product", () => {
  it("Success", async () => {
    const response = await request(server)
      .get("/product")
      .query({ name: "produto1" })
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        name: "produto1",
        description: "descricao1",
        price: 10.1,
        stock: 10,
      },
    ]);
  });
});

describe("Endpoint product", () => {
  it("Sucess", async () => {
    const response = await request(server)
      .get("/product")
      .query({ name: "produtoNãoExistente" })
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});

describe("Endpoint product", () => {
  it("Sucess", async () => {
    const response = await request(server)
      .get("/product")
      .query({ name: "produto" })
      .send();

    let expectArray = [
      {
        name: "produto1",
        description: "descricao1",
        price: 10.1,
        stock: 10,
      },
      {
        name: "produto2",
        description: "descricao2",
        price: 15,
        stock: 50,
      },
    ];

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectArray);
  });
});
