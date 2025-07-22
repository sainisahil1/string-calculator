function add(numbers){
    if(numbers === '') return 0;
    
    const splitNums = numbers.split(/,|\n/);
    const sum = splitNums.reduce((acc, curr) => acc + parseInt(curr), 0);

    return sum;
}

module.exports = { add };