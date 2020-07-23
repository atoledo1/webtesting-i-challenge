const { succeed, fail, repair } = require("./enhancer.js");

describe("repair, success, fail items", function () {
  it("Repairs item durability to 100", function () {
    expect(repair({ durability: 10, enhancement: 10 }).durability).toBe(100);
  });
  it("If it succeeds items not enhanced past limit", function () {
    expect(succeed({ enhancement: 20 }).enhancement).toBe(20);
  });
  it("If it succeeds enhance items under limit", function () {
    expect(succeed({ enhancement: 10 }).enhancement).toBe(11);
  });
  it("If it fails decrease durability by 5 if enhanced item is less than level 15", function () {
    expect(fail({ enhancement: 14, durability: 10 }).durability).toBe(5);
  });
  it("If it fails decrease durability by 10 if enhanced item is level 15 or higher", function () {
    expect(fail({ enhancement: 17, durability: 11 }).durability).toBe(1);
  });
  it("If it fails decrease enhancement level by 1 if enhanced item is level 16 or higher", function () {
    expect(fail({ enhancement: 18 }).enhancement).toBe(17);
  });
});
