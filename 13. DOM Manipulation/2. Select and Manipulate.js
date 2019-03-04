//          The Process
//  SELECT an element and then MANIPULATE

// for our example, we'll change the <h1> color using JS

let h =document.querySelector("h1"); 
h.style.color = "pink";

let body = document.querySelector("body");
let isBlue=false;

setInterval(function () {
    if(isBlue){
        body.style.background="white";
    }else{
        body.style.background= "#3498db";
    }
    isBlue= !isBlue;
},1000);