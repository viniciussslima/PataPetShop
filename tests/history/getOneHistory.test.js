const server = require("../../src/index");
const request = require("supertest");
const { login } = require("../helpers");

describe("Endpoint history", () => {
  it("Success", async () => {
    const token = await login("admin", "admin");
    const response = await request(server)
      .get("/history/db4dc8a0-a64b-47c0-ae5d-1f6fdfefdb0e")
      .set("x-access-token", token)
      .send();

    let expectArray = {
      date: "2021-04-17T17:48:49.000Z",
      id: "db4dc8a0-a64b-47c0-ae5d-1f6fdfefdb0e",
      products: [
        { product: "Ração de cachorro", qty: 3 },
        { product: "racao recheada", qty: 3 },
      ],
      user: "admin",
      value: 33.9,
    };
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectArray);
  });
});
