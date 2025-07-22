function add(numbers){
    if(numbers === '') return 0;

    let delimiter = /,|\n/;
    let numStr = numbers;

    if(numbers.startsWith('//')){
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].slice(2));
        numStr = parts[1];
    }
    
    const splitNums = numStr.split(delimiter);
    const parsedNums = splitNums.map(n => parseInt(n));

    const negativeNums = parsedNums.filter(n => n < 0);
    if(negativeNums.length > 0){
        throw new Error(`Negatives not allowed: ${negativeNums.join(', ')}`);
    }

    const sum = parsedNums.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

module.exports = { add };