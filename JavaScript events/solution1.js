var button = document.querySelector("button");
var oddCounter = document.querySelector("#odd span");
var evenCounter= document.querySelector("#even span");
var info = document.getElementById("rolledInfo");
var complete=document.querySelector("#info");
var oddInfo= document.querySelector("#odd");
var evenInfo= document.querySelector("#even");

var odd=0,even=0;

//add event listener for button
button.addEventListener("click",()=>{
    var number = Math.floor(Math.random()*6)+1;
    info.textContent="Rolled number is "+number;
    if(number%2==0){
        even++;
        evenCounter.textContent=even;
    }
    else{
        odd++;
        oddCounter.textContent=odd;
    }

});

//add event listeners for hover effect on odd counter
oddInfo.addEventListener("mouseenter",()=>{
    complete.textContent="Odd percentage completed is "+odd+"%";
});
oddInfo.addEventListener("mouseleave",()=>{
    complete.textContent="";
});

//add event listeners for hover effect on even counter.
evenInfo.addEventListener("mouseenter",()=>{
    complete.textContent="Even percentage completed is "+even+"%";
});
evenInfo.addEventListener("mouseleave",()=>{
    complete.textContent="";
});