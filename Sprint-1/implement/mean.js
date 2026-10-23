function calculateMean(list) {

    if (list.length === 0) {
        throw new Error("calculateMean requires a non-empty array");
    }
    
    let total = 0;

    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }

    return total / list.length;
}

module.exports = calculateMean;
