// This function capitalizes the first char in a string:

// function capitalize(str) {

//     "use strict";
//     if(typeof str==="number"){
//         return "that's not a string!";
//     }
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// let city = "paris";
// let capital = capitalize(city);
// console.log(capital);

// let num = 37;
// capital = capitalize(num);
// console.log(capital);

//                  Function Declaration VS. Function Expression

// Function Declarration
function capitalize(str){
    "use strict";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let capital = function (str){
    "use strict";
    return str.charAt(0).toUpperCase() + str.slice(1);
}; 
