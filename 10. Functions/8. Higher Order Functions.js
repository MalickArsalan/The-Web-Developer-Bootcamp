//  Higher Order Functions

// Higher Order Functions are functions That either take a funnction as an argument or they return another

function singSong(){
    "use strict";
    console.log("twinkle twinkle...");
    console.log("How I wonder...");
}

let num = setInterval(singSong,1000);

clearInterval(num);

// Annonymous Functions

 setInterval(function(){
     "use strict";
     console.log("I am anonymous function!");
     console.log("THIS IS AWESOME");
 },1000);