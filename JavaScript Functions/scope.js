var x=10;
function abc(paramet){
    var y=5;
    console.log("From function : "+x+" and value of y is : "+y);
}

efg=()=>{
    var z= 6;
}

console.log(x+" ");
for(var i=0;i<4;++i){
    console.log("From the loop : "+x);
}
abc("alkfjak;sdjf;kl");

//global scope : a variable having global scope can be used  ANYWHERE in the whole program.
//local scope : a variable having local scope can be used in only a SPECIFIC portion of the program.

//OPTIONAL. If you are not able to understand, skip this.
// variable/function 
// 1) Allot memory
// 2) Use variable/function
// 3) Deallocate memory

//arguements have a local scope