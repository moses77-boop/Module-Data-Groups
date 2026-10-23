function calculateMean(list) {
    let total = 0;

    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }

    return total / list.length;
}

module.exports = calculateMean;
