function highAndLow(numbers){
    let x = numbers.split(" ");
    let z = x.sort(function (a,b){return b - a});
    let high = z[0];
    let small = z[z.length-1];
    var string1 = high.concat(" ",small);
    console.log(string1);
    return string1;
    // ...
  }

highAndLow("1 3 4 5 6 7 8");
