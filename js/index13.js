
function solution(input, markers) {
    var mark1 = input.search(markers[0])-1;
    var slash = input.search(/\n/);
    return input.replace(input.slice(mark1, slash), "").split(/\n/).join("\\n").split(markers[1]).shift().replace(/ +$/,"");
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))