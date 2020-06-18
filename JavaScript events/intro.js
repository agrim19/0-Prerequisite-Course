//DOM: select-->manipulate
//Events: select-->add Event

var button = document.querySelector("button");
var h1=document.getElementsByTagName("h1");
var counter=document.querySelector("span");
var num =0;

//add event
button.addEventListener("mouseenter",eventToggler);

function eventToggler(){
    //callback function
    num+=1;
    h1[0].classList.toggle("special");
    counter.textContent=num;
}