export function calculateMedian(list) {

    if (!Array.isArray(list)) {
        throw new Error("calculateMedian requires an array of numbers");
    }
    const middleIndex = Math.floor(list.length / 2);
    
    if (list.length % 2 === 1) {
        return list[middleIndex];
    }

    const lowerMiddle = list[middleIndex - 1];
    const upperMiddle = list[middleIndex];
    return (lowerMiddle + upperMiddle) / 2;
}