// let answer = prompt("are we there yet?");

// while(answer.toLowerCase()!=="yes" && answer.toLowerCase()!=="yeah"){
//     answer = prompt("are we there yet?");
// }

// alert("YAY, WE MADE IT!!!");

//              OR

let answer = prompt("are we there yet?");

while(answer.indexOf("yes")===-1 && answer.indexOf("yeah")===-1){
    answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!!!");
