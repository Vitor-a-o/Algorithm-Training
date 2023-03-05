function isValidWalk(walk) {
    var x, y;
    x = walk.filter((item) => item == "n").length - walk.filter((item) => item == "s").length;
    y = walk.filter((item) => item == "w").length - walk.filter((item) => item == "e").length;
    console.log(x);
    console.log(y);
    console.log(x == 0 && y == 0 && walk.length == 10)
    return (x == 0 && y == 0 && walk.length == 10);
  }

  isValidWalk(['n','s','w','s','n','e','n','s','e','w'])
