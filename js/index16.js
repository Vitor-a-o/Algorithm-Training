function zeros (n) {
    if (n == 0) return 0;
    var res = 1;
    for(var i = 1; i < n + 1; i++){
        res *= i;
    };
    var str = res.toString();
    var result = 0;
    do{
        var re = str.match(/0+/)[0].length;
        if(re > result){
            result = re;
        }
        str = str.replace(/0+/,"");
    }while(/0/.test(str))
    return result
}


console.log(zeros(30))