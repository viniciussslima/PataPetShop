const server = require("../../src/index");
const request = require("supertest");

describe("Endpoint auth/logout", () => {
  it("Success", async () => {
    const response = await request(server).post("/auth/logout").send();

    expect(response.status).toBe(200);
    expect(response.body.token).toBeNull();
  });
});
