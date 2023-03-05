
console.log("comecou")
function toCamelCase(str){
    for(var i = 0; i < str.length; i++){
        if(str[i] == "-" || str[i] == "_"){
            str = str.substr(0, i) + str[i+1].toUpperCase() + str.substr(i);
        }
    }
    str = str.replace(/-/g, "")
    return str;
}

console.log(toCamelCase("vitor-arriada-oliveira"))