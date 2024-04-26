function sumStrings(a,b) { 
    var res = 0;
    a == ""? res = b : b == ""? res = a :
    res = parseInt(a) + parseInt(b);
    return res.toPrecision();
  }

  console.log(sumStrings(1344, 4.34e+5))