const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint scale", () => {
  it("Success", async () => {
    const token = await login("admin", "admin");
    const response = await request(server)
      .get("/scale/teste2")
      .set("x-access-token", token)
      .send();

    let expectArray = [
      {
        date: "1/1/2021",
        startHour: "10:30",
        endHour: "12:0",
      },
      {
        date: "1/1/2021",
        startHour: "15:0",
        endHour: "20:0",
      },
      {
        date: "11/4/2021",
        startHour: "14:30",
        endHour: "15:0",
      },
      {
        date: "12/4/2021",
        startHour: "14:30",
        endHour: "15:0",
      },
    ];

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectArray);
  });
});
