const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint scale", () => {
  it("Success", async () => {
    const token = await login("admin", "admin");
    const response = await request(server)
      .post("/scale/")
      .set("x-access-token", token)
      .send({
        employee: "teste2",
        date: "12/04/2021",
        startHour: "14:30",
        endHour: "15:00",
      });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint scale", () => {
  it("Fail", async () => {
    const token = await login("teste2", "1234");
    const response = await request(server)
      .post("/scale")
      .set("x-access-token", token)
      .send({
        employee: "teste2",
        date: "12/04/2021",
        startHour: "14:40",
        endHour: "15:00",
      });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Você não tem permissão para isso",
    });
  });
});

describe("Endpoint scale", () => {
  it("Fail", async () => {
    const token = await login("admin", "admin");
    const response = await request(server)
      .post("/scale")
      .set("x-access-token", token)
      .send({
        employee: "teste2",
        date: "12/04/2021",
        startHour: "14:40",
        endHour: "15:00",
      });

    expect(response.status).toBe(409);
    expect(response.body).toEqual({
      message: "Esse horario desse funcionario está ocupado",
    });
  });
});
