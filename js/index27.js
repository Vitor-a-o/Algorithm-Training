function highAndLow(numbers){
    numbers = numbers.split(" ").sort((i1, i2) => parseInt(i1) < parseInt(i2) ? -1 : parseInt(i1) > parseInt(i2) ? 1 : 0);
    return numbers[numbers.length - 1] + " " + numbers[0];
}

console.log(highAndLow("11 0 76 -6 9 45"))