var age=parseInt(prompt("Enter your age:"));

// >:greater than 
// <:less than
// >= greater than or equal to
// <= less than or equal to 
// a === b  18==="18" =>false
// a == b   18=="18"  =>true
// a!=b

// if age is less than 18, print minor,
// else if age is between 18 and 21 inclusive, print just adult
// else if age is over 21 print adult



// if(age<18)
//     console.log("minor");
// else{
//     //nested conditional
//     // age>=18
//     if(age<=21)  //18<=age<=21
//         console.log("just adult");
//     else
//         console.log("adult");
// }

//if else ladder
// if(age<18)
//     console.log("minor");
// else if(age<=21)
//     console.log("just adult");
// else
//     console.log("adult");

//just adult if 18<=age<=21 
// do not do anything otherwise
//&&, ||, !
if(age>=18 && age<=21){
    console.log('just adult')
}