const server = require("../src/index");
const request = require("supertest");
const { login } = require("./helpers");

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .delete("/user")
      .set("x-access-token", token)
      .send({ username: "teste2" });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste3", "1234");
    const response = await request(server)
      .delete("/user")
      .set("x-access-token", token)
      .send({ username: "teste3" });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint /user", () => {
  it("Fail", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .delete("/user")
      .set("x-access-token", token)
      .send({ username: "UsuarioNaoExistente" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Esse usuário não existe",
    });
  });
});

describe("Endpoint /user", () => {
  it("Fail", async () => {
    const token = await login("teste4", "1234");
    const response = await request(server)
      .delete("/user")
      .set("x-access-token", token)
      .send({ username: "teste5" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Você não tem permissão para isso",
    });
  });
});
