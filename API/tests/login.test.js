const server = require("../src/index");
const request = require("supertest");

describe("Endpoint auth/login", () => {
  it("Success", async () => {
    const response = await request(server)
      .post("/auth/login")
      .send({ username: "teste", password: "1234" });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});

describe("Endpoint auth/login", () => {
  it("Fail", async () => {
    const response = await request(server)
      .post("/auth/login")
      .send({ username: "usuarioNaoCadastrado", password: "1234" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: "Esse usuário não existe" });
  });
});

describe("Endpoint auth/login", () => {
  it("Fail", async () => {
    const response = await request(server)
      .post("/auth/login")
      .send({ username: "teste", password: "senhaIncorreta" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: "Senha incorreta" });
  });
});
