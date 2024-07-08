// Example: tests/auth.test.js
const request = require("supertest");
const app = require("../app");

describe("Auth API", () => {
  it("should sign up a user", async () => {
    const res = await request(app).post("/auth/signup").send({
      name: "Test User",
      email: "test@example.com",
      password: "password",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("token");
  });

  it("should log in a user", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "test@example.com",
      password: "password",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
  });
});
