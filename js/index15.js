var fibonacci = function(n) {
    if(n==0 || n == 1)
        return n;
    var pol = [0, 1, 1];
    for(var i = 2; i < n; i++){
        pol.push(pol[i] + pol[i-1])
    }
    return pol[n];
}

console.log(fibonacci(50))