var decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    var Len = bits.replace(/^0+/, "").split();
    var dotLen = Len[0].length;
    var slashLen = Len[1].length;
    
    for(var i = 0; i < Len.length - 1; i++){
        if (Len[i].length < Len[i+1].length){
            dotLen = Len[i].length;
            slashLen = Len[i + 1].length;
            break
        }else if(Len[i].length > Len[i+1].length){

        }
    }

    var splitLen = "";

    return bits.replace(/^0+/,"").split(splitLen.padStart(dotLen*7, "0")).join("   ").split(splitLen.padStart(dotLen*3, "0")).join(" ").split(splitLen.padStart(dotLen*3, "1")).join("-").split(splitLen.padStart(dotLen, "1")).join(".").split(splitLen.padStart(dotLen, "0")).join("")
}

decodeMorse = function(morseCode){
    var m = {
        ".-":"A",
        "-...":"B",
        "-.-.":"C",
        "-..":"D",
        ".":"E",
        "..-.":"F",
        "--.":"G",
        "....":"H",
        "..":"I",
        ".---":"J",
        "-.-":"K",
        ".-..":"L",
        "--":"M",
        "-.":"N",
        "---":"O",
        ".--.":"P",
        "--.-":"Q",
        ".-.":"R",
        "...":"S",
        "-":"T",
        "..-":"U",
        "...-":"V",
        ".--":"W",
        "-..-":"X",
        "-.--":"Y",
        "--..":"Z",
        ".----":"1",
        "..---":"2",
        "...--":"3",
        "....-":"4",
        ".....":"5",
        "-....":"6",
        "--...":"7",
        "---..":"8",
        "----.":"9",
        "-----":"0",
        "...---...":"SOS",
        ".-.-.-":".",
        "-.-.--":"!"
        }
        return morseCode.split("   ").map((j) => j.split(" ").map((i) => i = m[i]).join("")).join(" ").replace(/^ +/,"");
}

console.log(decodeMorse('--'))
console.log(decodeBits(''))