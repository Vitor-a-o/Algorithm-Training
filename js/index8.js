function rgb(r, g, b){
    var t = (i) => {return i < 1? "00": i > 255? "FF": parseInt(i).toString(16).toUpperCase().padStart(2, "0")};
    return t(r) + t(g) + t(b);
}
console.log(rgb(200, 300, 000));

