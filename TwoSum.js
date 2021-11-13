function twoSum(numbers, target) {
    var len = numbers.length;
    for (let i = 0; i<len; i++){
      for(let x = i+1; x<len; x++){
        if(numbers[i] + numbers[x] == target) {
        return ([i,x]);
        }
      }
    }
    // ...
  }