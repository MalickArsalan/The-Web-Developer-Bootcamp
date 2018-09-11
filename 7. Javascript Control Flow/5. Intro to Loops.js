//                  While Loops
//          Repeat code while a condition is true

// Printing number fro 1-5 
let count = 1;
while (count < 6) {
    console.log("count is: " + count);
    count++;
}

// "count is: 1
// "count is: 2
// "count is: 3
// "count is: 4
// "count is: 5

// Printing each character in a string
// string we're looping over:
let str = "hello";
// first character is at index 0
var count = 0;

while (count < str.length){
    console.log(str[count]);
    count++;
}

//"h"
//"e"
//"l"
//"l"
//"0"

//Infinit loops occur whn the terinating
//condition in a loop is never true
let count = 0;
while (count < 6) {
    console.log("count is: " + count);
}

//Printing Odd Numbers 1-11
let count = 1;
while (count <= 10) {
    console.log("count is: " + count);
    count+=2;
}

//Printing multiples of from 1-20
let count = 1;
while (count <= 20) {
    if (num%4===0) {
        console.log(count);
    }
}

// Infinit Loop
let num = 100;

while(num<150){
    console.log(num + 1);
    num--;
}