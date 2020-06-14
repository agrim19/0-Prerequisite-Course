//array is a list. hence, it is a variable that can store multiple data items

// ar : 78,86,92,100,60
//indexes

var ar=[86,78,92,100,60,71];
//      0 , 1, 2, 3 ,4,  5  ar[0]
// ar[0],ar[1],ar[2],ar[3]

ar=["Hello ","World "];
ar.push("Banana");

var sum=0;
// for(var i=0;i<ar.length;++i){
//     console.log(i+"th element is "+ar[i]);
//     sum+=ar[i];
// }


//forEach
ar.forEach(function(x){
    console.log("Value is : "+x);
});

console.log("Sum of array is : "+sum);
console.log("Average marks are : "+sum/ar.length);