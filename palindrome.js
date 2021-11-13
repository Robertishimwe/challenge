function pal(z){
    let nn = z.split("");
    let x = nn.reverse();
    let y = x.join('');
    //console.log(z,y);
    if( z == y) {
        console.log("it is palindrome");
    } else {
        console.log("it is not palindrome");
    }
}

pal("amama");