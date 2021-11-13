function arithmetic(a, b, operator){
    var answ;
    var arr =["add", "subtract", "divide", "multiply"];
    if(operator == arr[0]){
      answ = a+b;
    } else if(operator == arr[1]){
        answ =a-b;
      
    } else if(operator == arr[2]){
        answ =a*b;
    } else {
        answ =a/b;
    }
    console.log(answ);
    
    //your code here!
  }

  arithmetic(3,3,"add")