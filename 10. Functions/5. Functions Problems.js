function isEven(num){
    "use strict";
    return (num%2===0);
}

function factorial(number){
    "use strict";
    if (number===1 || number===0){
        return 1;
    }

    return (factorial(number - 1) * number);
}

// function kebabToSnake(str){
//     "use strict";
//     let newstring = str.split("-");
//     str="";
//     for(let x=0;x<newstring.length;x+=1){
//         if(x===newstring.length-1){
//             str += newstring[x];
//             break;
//         }
//         else{
//         str += newstring[x] + "_";
//         }
//     }
 
//     return str;
// }

// kebabToSnake Solution
function kebabToSnake(str){
    "use strict";
    return str.replace(/-/g,"_");
}