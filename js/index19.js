function validSolution(board){
    var res = true;
    function isValid(line){
        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for(var i of a){
            if(!line.includes(i)){
                res = false;
                return;
            }
        }
    }
    var j = 0;
    while(res && j < 9){
        var l = [];
        var q = [];
        for(var k = 0; k < 9; k++){
            l.push(board[k][j]);
            q.push(board[parseInt(k/3)+(parseInt(j/3)%3*3)][(k%3)+j%3*3]);
        };
        isValid(q);
        isValid(l);
        isValid(board[j]);
        j++;
    }
    

    return res;
}

console.log(validSolution([[5, 3, 4, 1, 7, 8, 9, 6, 2],
                           [1, 7, 2, 6, 9, 5, 3, 4, 8],
                           [6, 9, 8, 3, 4, 2, 5, 1, 7],
                           [8, 5, 9, 7, 6, 1, 4, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 6, 1, 5, 3, 7, 2, 8, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 4, 5, 2, 8, 6, 1, 7, 9]]))