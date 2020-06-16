function countA(check){
    var count=0;
    for(var i=0;i<check.length;++i){
        if(check.charAt(i)==='a')
            count++;
    }
    return count
}
factorial=(num)=>{
    //num! = num*(num-1)*(num-2)*...*1
    //1--> num --> num*(num-1)-->-->num!
    //2! = 2x1
    //4!= 4x3x2x1
    //0! = 1
    var answer= 1;
    for(var i=num;i>0;--i){
        answer*=i;
    }
    return answer;
}

replaceAll = (original)=>{
    return original.replace(/a/g,"A");
}

var str= prompt("Enter string to count the number of 'a's");
console.log("Number of a's in given string("+str+") is "+countA(str));

var num = parseInt(prompt("Enter number for factorial operation"));
console.log("Factorial of "+num+" is "+factorial(num));

var str1= prompt("Enter string for replacement operation");
console.log("After replacement of all 'a's by 'A's in "+str1+" we get " +replaceAll(str1));