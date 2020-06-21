const boxes=document.querySelectorAll(".colourBox");
const colours=getRandomColours();
const body = document.querySelector("body");
const jumbotron =document.querySelector(".jumbotron");
const backgroundButtons=document.querySelectorAll(".background");
const jumbotronButtons=document.querySelectorAll(".jumbo");

for(var i=0;i<6;++i){
    boxes[i].style.backgroundColor=colours[i];
    backgroundButtons[i].addEventListener("click",function(event){
        body.style.backgroundColor=event.path[1].style.backgroundColor;
    }); 
    jumbotronButtons[i].addEventListener("click",function(event){
        jumbotron.style.backgroundColor=event.path[1].style.backgroundColor;
    }); 
}


function getRandomColours(){
    //rgb
    var colours=[];
    for(var i=0;i<6;++i){
        //generate red,green,blue values. Then make rgb string. Add that to colours arrays
        var red=Math.floor(Math.random()*255);
        var green=Math.floor(Math.random()*255);
        var blue=Math.floor(Math.random()*255);
        //make our string in the form rgb(red, green, blue);
        var colour = "rgb("+red+", "+green+", "+blue+")";
        colours.push(colour);
    }
    return colours;
}   