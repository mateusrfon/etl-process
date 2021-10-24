import load from "../src/load";
import supertest from "supertest";

describe("GET/load", () => {
  const data = [1, 2, 3];
  const app = load(data);
  it("should return the loaded array of numbers", async () => {
    const result = (await supertest(app).get("/load")).body;
    expect(result).toEqual(data);
  });
});
