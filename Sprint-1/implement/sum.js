function sum(elements) {
    if (!Array.isArray(elements)) {
        throw new Error("sum requires an array of numbers");
    }
}

module.exports = sum;
