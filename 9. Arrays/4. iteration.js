//      For Loop
// To loop over an array using a for loop, we need to 
// make use of the array's length property

let  colors=["Red","Orange","Yellow","Green"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);    
}

//      ForEach
// JavaScript providers an easy built-in way of 
// iterating over an array: 
// arr.forEach(somefunction)  => Syntax

let newColors = ["Red","Orange","Yellow","Green"];

newColors.forEach(function(color) {
    // color is placeholder, call it whatever you want
    "use strict";
    console.log(color);
});
function printColor(color){
    "use strict";
    console.log("***************");
    console.log(color);
    console.log("***************");
}
newColors.forEach(printColor);

//      Exercise
// What oes the following code print out?

let numbers = [1,2,3,4,5,6,7,8,9,10];
let tempColors = ["Red","Orange","Yellow","Green"];

numbers.forEach(function(color){
    "use strict";
    if(color%3===0){
        console.log(color);
    }
});