function narcissistic(value) {
    value = value.toString();
    var res = 0;
    for(var i = 0; i < value.length; i++){
        res += Math.pow(parseInt(value[i]), value.length) 
    }
    return res == value;
}

console.log(narcissistic());