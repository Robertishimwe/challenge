function getCount(str) {
    var vowelsCount = 0;
    let arr = [];
    let x = str.split("");
    var z = ["a","e","i","o","u"];

    for(let i = 0; i<x.length; i++) {
        for(let j = 0; j<z.length; j++) {
            if(x[i] == z[j]) {
                arr.push(x[i]);
                vowelsCount = arr.length;
            }
        }
    }
    console.log(vowelsCount);

    // iie
    
    
    // enter your majic here
    
    //return vowelsCount;
  }

  getCount("ishimwe");