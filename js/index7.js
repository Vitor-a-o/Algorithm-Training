function orderWeight(strng) {
    var r = "";
    strng = strng.split(" ")
        .map((i) => {
        var w = 0;
        for(j of i.toString()){
            w += parseInt(j);
        }
        return [i, w];
    })
    .sort((i1, i2) => {
        if(i1[1] < i2[1]){
            return -1;
        }else if(i1[1] > i2[1]){
            return 1;
        }else if(i1[0] > i2[0]){
            return 1;
        }else if(i1[0] < i2[0]){
            return -1;
        }else{
            return 0;
        }
    })
    for(var k of strng){
        r = r.concat(k[0], " ");
    }
    return r.slice(0, r.length-1);
}

console.log(orderWeight("88 43 78 90 81 100 2002"))