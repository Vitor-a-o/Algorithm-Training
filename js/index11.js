function rot13(message){
    var abc = {
    "a":[1,"a"],
    "b":[2,"b"],
    "c":[3,"c"],
    "d":[4,"d"],
    "e":[5,"e"],
    "f":[6,"f"],
    "g":[7,"g"],
    "h":[8,"h"],
    "i":[9,"i"],
    "j":[10,"j"],
    "k":[11,"k"],
    "l":[12,"l"],
    "m":[13,"m"],
    "n":[14,"n"],
    "o":[15,"o"],
    "p":[16,"p"],
    "q":[17,"q"],
    "r":[18,"r"],
    "s":[19,"s"],
    "t":[20,"t"],
    "u":[21,"u"],
    "v":[22,"v"],
    "w":[23,"w"],
    "x":[24,"x"],
    "y":[25,"y"],
    "z":[26,"z"]
    }
    return message.split("").map((i) => {var a = abc[i][0]+13; i = })
}

console.log(rot13("grfg"))