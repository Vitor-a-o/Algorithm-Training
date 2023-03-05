
//res = function digitize(n){
//    return n.toString().split("").reverse().map((i) => parseInt(i));
//}

res = function digitize(n){
    return String(n).split("").map(Number).reverse();
}

console.log(res(19045));