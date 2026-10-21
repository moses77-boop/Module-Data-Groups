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