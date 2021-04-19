const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint scheduling", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .post("/scheduling/")
      .set("x-access-token", token)
      .send({
        scale: {
          employee: "teste2",
          date: "11/04/2021",
          startHour: "14:30",
          endHour: "15:00",
        },
        user: "teste1",
      });

    expect(response.status).toBe(200);
  });
});

describe("Endpoint scheduling", () => {
  it("Fail", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .post("/scheduling")
      .set("x-access-token", token)
      .send({
        scale: {
          employee: "teste2",
          date: "11/04/2021",
          startHour: "14:30",
          endHour: "15:00",
        },
        user: "teste1",
      });

    expect(response.status).toBe(409);
    expect(response.body).toEqual({
      message: "Esse horário já está agendado",
    });
  });
});

describe("Endpoint scheduling", () => {
    it("Fail", async () => {
      const token = await login("teste1", "1234");
      const response = await request(server)
        .post("/scheduling")
        .set("x-access-token", token)
        .send({
          scale: {
            employee: "teste2",
            date: "13/04/2021",
            startHour: "14:30",
            endHour: "15:00",
          },
          user: "teste1",
        });
  
      expect(response.status).toBe(409);
      expect(response.body).toEqual({
        message: "Esse horário não está disponivel para esse funcionario",
      });
    });
  });