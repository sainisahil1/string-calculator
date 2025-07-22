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
    const sum = splitNums.reduce((acc, curr) => acc + parseInt(curr), 0);
    return sum;
}

module.exports = { add };