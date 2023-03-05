function tickets(peopleInLine){
    var V25 = 0;
    var V50 = 0;
    for(var i of peopleInLine){
        switch(i){
            case 25:
                V25++;
                break;
            case 50:
                if(V25){
                    V25--;
                    V50++;
                }else{
                    return "NO"
                }
                break;
            case 100:
                if(V25 && V50){
                    V50--;
                    V25--;
                }else if(V25 > 2){
                    V25 -=3
                }else{
                    return "NO"
                }
        }
    }
    return "YES"
  }

  console.log(tickets([25, 100]))