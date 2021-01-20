import { expect } from "chai";
import supertest from "supertest";
import app from "../../src/index";

describe("GET /", () => {
  it("it should return 200 status", async () => {
    const res = await supertest(app).get("/").send({});
    expect(res.status).to.equal(200);
  });
});
