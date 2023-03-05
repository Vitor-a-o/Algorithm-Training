function convertFrac(lst){
    lst = lst.sort((i1, i2) => {return i1[1] < i2[1]? -1: i1[1] > i2[1]? 1: 0});
    var den = 0; 
    lst[lst.length-1][1] == lst[lst.length-2][1]? den = lst[lst.length-2][1]: den = lst[lst.length-1][1]*lst[lst.length-2][1];
    for(var i = 0; i < lst.length; i++){
        if(den%lst[i][1] != 0){
            den *= lst[i][1];
        }
    }
    return lst.map((i) => `(${den/i[1]*i[0]},${den})`).join("")
}

console.log(convertFrac([ [1, 2], [1, 3], [1, 5], [1, 4], [1, 2]]))