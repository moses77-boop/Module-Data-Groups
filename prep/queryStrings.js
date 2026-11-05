// const queryString = "https://example.com/widgets?colour=blue&sort=newest";

// parseQueryString(url);

function parseQueryString(queryString) {
  const object = {};
  if (queryString === "") {
    return object;
  }

  const pair = queryString.split("&");

  for (const item of pair) {
    const [key, value] = item.split("=");

    object[key] = value;
  }
  return object;
}

module.exports = parseQueryString;
