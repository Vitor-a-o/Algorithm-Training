function isProgram(str){
    var a = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    str = str.split("")
    for (var i = 0; i <= 25; i++) {
        var l = a[i];
    if (str.includes(l.toUpperCase()) || str.includes(l.toLowerCase())){
        continue;
    }else{
        return false;
    }
    }
    return true;
}

function isPangram2(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }

  

console.log(isProgram("abcdefghijkLmnopqRStuVwxyzA"))