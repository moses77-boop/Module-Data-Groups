const parseQueryString = require("./queryStrings.js");

describe("", () => {
  test("Will return an empty object when we call parseQueryString with an empty string", () => {
    const input = "";
    const currentOutput = parseQueryString(input);
    const targetOutput = {};

    expect(currentOutput).toEqual(targetOutput);
  });
});
