
var banana=document.getElementById("peel");
banana.style.color="yellow";
banana.style.backgroundColor="black";
banana.textContent="Almonds";
banana.classList.add("optional");

var optional=document.querySelectorAll(".optional");
for(var i=0;i<optional.length;++i){
    optional[i].style.color="green";
    optional[i].style.backgroundColor="orange";
    optional[i].style.border="5px solid purple";
}
var cherry=document.querySelector("#noPeel");
cherry.style.color="red";
cherry.style.backgroundColor="green";
cherry.innerHTML="<strong>Cherry</strong>"

var litchilink = document.querySelector('a');
litchilink.setAttribute("href","https://www.cherry.com/");
litchilink.textContent="Click me to go to cherry";

var links=document.getElementsByTagName("a");
for(var i=0;i<links.length;++i){
    links[i].style.backgroundColor="steelblue";
}