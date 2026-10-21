import { calculateMedian } from "./median.js";

test("calculates the median of a list of odd length", () => {
    const list = [10, 20, 30, 40, 50];
    const currentOutput = calculateMedian(list);
    const targetOutput = 30;

    expect(currentOutput).toEqual(targetOutput);
});

test("doesn't modify the input", () => {
    const list = [1, 2, 3];
    calculateMedian(list);

    expect(list).toEqual([1, 2, 3]);
});

test("calculates the median of a list of even length", () => {
    const list = [10, 20, 30, 40];
    const currentOutput = calculateMedian(list);
    const targetOutput = 25;

    expect(currentOutput).toEqual(targetOutput);
});

test("throws an error when given an empty list", () => {
    expect(() =>  calculateMedian([])).toThrow(new Error("calculateMedian requires a non-empty array"));
});

test("throws an error when given something that isn't an array", () => {
    expect(() => calculateMedian("banana")).toThrow(new Error("calculateMedian requires an array of numbers"));
});

test("throws an error when given an array with a non-number", () => {
    expect(() => calculateMedian(["ten", "twenty", "thirty"])).toThrow(new Error("calculateMedian requires an array of numbers"));
});

test("throws an error when given no argument", () => {
    expect(() => calculateMedian()).toThrow(new Error("calculateMedian requires an array of numbers"));
});