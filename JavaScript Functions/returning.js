function add(a,b){   //a function to add 2 numbers that are passed as arguements
    var c=a+b;
    return c;
}
function checkeven(num){    //a function to check if the number passed as an arguement is even or odd, returns true if number is even, returns false if number is odd
    var c;
    if(num%2==0)
        c=true;
    else
        c=false;
    return c;

}

var first = parseInt(prompt("Enter first number"));
var second = parseInt(prompt("Enter second number"));

//add these 2 numbers, then I'll print evensum if the sum is even, and I'll print oddsum if the sum is odd.
//return: used to send BACK values from the function

var sum = add(first,second);
if(checkeven(sum)){
    console.log("EVEN SUM");
}
else{
    console.log("ODD SUM");
}