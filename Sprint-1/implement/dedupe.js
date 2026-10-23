function dedupe(originalArray) {
    const uniqueItems = [];

    for (let i = 0; i < originalArray.length; i++) {
        const currentItem = originalArray[i];
        uniqueItems.push(currentItem);
    }

    return uniqueItems;
}

module.exports = dedupe;
