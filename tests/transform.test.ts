import transform from "../src/transform";

describe("transformData", () => {
  it("should order the received array of numbers and return", () => {
    const extraction = [0.7, 0.5, 0.5, 0.2, 0.5];
    const result = transform(extraction);
    expect(result).toEqual([0.2, 0.5, 0.5, 0.5, 0.7]);
  });
});
