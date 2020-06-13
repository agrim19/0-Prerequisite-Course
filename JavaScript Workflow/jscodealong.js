//starting point is taken from user
//ending point is taken from user

//conditionals,loops,prompts,modulo operator

//get start and end points 
var start = prompt("Enter starting point");
var end = prompt("Enter ending point");

//++i,i++ ======= i+=1
for(var i=start;i<=end;++i){
    //check its divisiblity by 2: if remainder is 1, number is odd, else number is even
    if(i%2===1){
        console.log(i+" is odd");
    }
    else{
        console.log(i+"  is even");
    }
}