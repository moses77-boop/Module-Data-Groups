const parseQueryString = require("./queryStrings.js");

describe("", () => {
  test("Will return an empty object when we call parseQueryString with an empty string", () => {
    const input = "";
    const currentOutput = parseQueryString(input);
    const targetOutput = {};

    expect(currentOutput).toEqual(targetOutput);
  });

  test("handles the case when queryString contains 1 pair", () => {
    const input = "sort=newest";
    const currentOutput = parseQueryString(input);
    const targetOutput = { sort: "newest" };

    expect(currentOutput).toEqual(targetOutput);
  });
});
