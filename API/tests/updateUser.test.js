const server = require("../src/index");
const request = require("supertest");
const login = require("./login");

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste1");
    const response = await request(server)
      .put("/user")
      .set("x-access-token", token)
      .send({ username: "usuarioParaMudar", type: "admin" });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste1");
    const response = await request(server)
      .put("/user")
      .set("x-access-token", token)
      .send({ username: "usuarioParaMudar", type: "client" });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste1");
    const response = await request(server)
      .put("/user")
      .set("x-access-token", token)
      .send({ username: "usuarioParaMudar", type: "vet" });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste1");
    const response = await request(server)
      .put("/user")
      .set("x-access-token", token)
      .send({ username: "usuarioParaMudar", type: "seller" });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint /user", () => {
  it("Success", async () => {
    const token = await login("teste1");
    const response = await request(server)
      .put("/user")
      .set("x-access-token", token)
      .send({ username: "usuarioParaMudar", type: "washer" });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint /user", () => {
  it("Fail", async () => {
    const token = await login("teste1");
    const response = await request(server)
      .put("/user")
      .set("x-access-token", token)
      .send({ username: "usuarioParaMudar", type: "TypeInvalido" });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "O valor do campo type é inválido",
    });
  });
});

describe("Endpoint /user", () => {
  it("Fail", async () => {
    const token = await login("teste1");
    const response = await request(server)
      .put("/user")
      .set("x-access-token", token)
      .send({ username: "usuarioNãoExistente", type: "vet" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: "Esse usuário não existe" });
  });
});

describe("Endpoint /user", () => {
  it("Fail", async () => {
    const token = await login("teste2");
    const response = await request(server)
      .put("/user")
      .set("x-access-token", token)
      .send({ username: "usuarioParaMudar", type: "vet" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Você não tem permissão para isso",
    });
  });
});

describe("Endpoint /user", () => {
  it("Fail", async () => {
    const token = await login("teste3");
    const response = await request(server)
      .put("/user")
      .set("x-access-token", token)
      .send({ username: "usuarioParaMudar", type: "vet" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Você não tem permissão para isso",
    });
  });
});

describe("Endpoint /user", () => {
  it("Fail", async () => {
    const token = await login("teste4");
    const response = await request(server)
      .put("/user")
      .set("x-access-token", token)
      .send({ username: "usuarioParaMudar", type: "vet" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Você não tem permissão para isso",
    });
  });
});

describe("Endpoint /user", () => {
  it("Fail", async () => {
    const token = await login("teste5");
    const response = await request(server)
      .put("/user")
      .set("x-access-token", token)
      .send({ username: "usuarioParaMudar", type: "vet" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Você não tem permissão para isso",
    });
  });
});
