function oddOrEven(array) {
    var sum=0;
    var avg;
    for (let i =0; i<array.length; i++) {
      sum = sum+array[i];
      if (sum == 0) {
        return "even";
      } else if(sum%2==0) {
        
        return "even";
        
      } else {
        return "odd";
      }
    }
     //enter code here
  }
  oddOrEven([1,2,3,4,5]);