const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint history", () => {
  it("Success", async () => {
    const token = await login("teste1", "1234");
    const response = await request(server)
      .get("/history")
      .set("x-access-token", token)
      .send();

    let expectArray = [
      {
        date: "2021-04-17T17:48:05.000Z",
        id: "31ef4fc6-0819-41b1-a4a0-67736abbf273",
        user: "teste1",
        value: 43.9,
      },
      {
        date: "2021-04-17T17:47:53.000Z",
        id: "75b27dc5-69cb-4e45-8222-317c57162d85",
        user: "teste1",
        value: 32.6,
      },
    ];

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectArray);
  });
});
