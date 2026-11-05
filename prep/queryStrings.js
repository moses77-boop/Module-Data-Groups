// const queryString = "https://example.com/widgets?colour=blue&sort=newest";

// parseQueryString(url);

function parseQueryString(queryString) {
  const object = {};

  const pair = queryString.split("=");
  const key = pair[0];
  const value = pair[1];

  object[key] = value;

  if (queryString === "") {
    return {};
  } else {
    return object;
  }
}

module.exports = parseQueryString;
