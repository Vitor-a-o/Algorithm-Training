function getPINs(observed) {
    var len = 0;
    var result = [];
    var possible = observed.split("").map((x) => {
        switch (x) {
        case "1":
            return [0 ,'1', '2', '4'];
        case "2":
            return [4 ,'1', '2', '3', '5'];
        case "3":
            return [3, '2', '3', '6'];
        case "4":
            return [4, '1', '4', '5', '7'];
        case "5":
            return [5, '2', '4', '5', '6', '8'];
        case "6":
            return [4, '3', '5', '6', '9'];
        case "7":
            return [3, '4', '7', '8'];
        case "8":
            return [5, '5', '7', '8', '9', '0'];
        case "9":
            return [3, '6', '8', '9'];
        case "0":
            return [0, '0', '8'];
        default:;
    }})
    len = possible.length;
    var str = "";
    function camada() {
        var k = 1;
        while(k){
            k = possible.findIndex((c) => c[0] === 0);
            if(!k){ break;}
            possible[k][0] = possible[k].length-1;
        }
    };
    camada();
    console.log(possible)
   // function z (i, j){
       // while(possible[i][0] != 0){
         //   str += 
        //}
      //  }
   // while (possible[0][0] > 0){
        
    //}
}

console.log(getPINs("510"))