const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .get("/user")
      .set("x-access-token", token)
      .send();

    let expectArray = [
      { username: "teste1", type: "admin" },
      { username: "teste3", type: "vet" },
      { username: "teste4", type: "seller" },
      { username: "teste5", type: "washer" },
    ];

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectArray);
  });
});

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .get("/user")
      .set("x-access-token", token)
      .query({ type: "admin" })
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ username: "teste1", type: "admin" }]);
  });
});

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .get("/user")
      .set("x-access-token", token)
      .query({ type: "vet" })
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ username: "teste3", type: "vet" }]);
  });
});

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .get("/user")
      .set("x-access-token", token)
      .query({ type: "seller" })
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ username: "teste4", type: "seller" }]);
  });
});

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .get("/user")
      .set("x-access-token", token)
      .query({ type: "washer" })
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ username: "teste5", type: "washer" }]);
  });
});

describe("Endpoint /user", () => {
  it("Fail", async () => {
    const token = await login("teste2", "1234");
    const response = await request(server)
      .get("/user")
      .set("x-access-token", token)
      .send();

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Você não tem permissão para isso",
    });
  });
});

describe("Endpoint /user", () => {
  it("Fail", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .get("/user")
      .set("x-access-token", token)
      .query({ type: "client" })
      .send();

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "O valor do campo type é inválido",
    });
  });
});
