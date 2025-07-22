function add(numbers){
    if(numbers === '') return 0;

    let delimiter = /,|\n/;
    let numStr = numbers;

    ({ delimiter, numStr } = checkForCustomDelimiter(numbers, delimiter, numStr));
    const parsedNums = parseStringToInt(numStr, delimiter);
    checkForNegatives(parsedNums);
    const sum = parsedNums.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

function checkForCustomDelimiter(numbers, delimiter, numStr) {
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].slice(2));
        numStr = parts[1];
    }
    return { delimiter, numStr };
}

function parseStringToInt(numStr, delimiter) {
    const splitNums = numStr.split(delimiter);
    const parsedNums = splitNums.map(n => parseInt(n));
    return parsedNums;
}

function checkForNegatives(parsedNums) {
    const negativeNums = parsedNums.filter(n => n < 0);
    if (negativeNums.length > 0) {
        throw new Error(`Negatives not allowed: ${negativeNums.join(', ')}`);
    }
}

module.exports = { add };