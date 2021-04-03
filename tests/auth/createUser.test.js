const server = require("../../src/index");
const request = require("supertest");

describe("Endpoint auth/create", () => {
  it("Success", async () => {
    const response = await request(server)
      .post("/auth/create")
      .send({ username: "teste", password: "1234" });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint auth/create", () => {
  it("Fail", async () => {
    const response = await request(server)
      .post("/auth/create")
      .send({ username: "teste", password: "1234" });

    expect(response.status).toBe(409);
    expect(response.body).toEqual({ message: "Esse usuário já existe" });
  });
});
