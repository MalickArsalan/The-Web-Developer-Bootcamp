//      Excercises

//  Get age  and convert it top a Number (prompt always return a String)
var age =Number(prompt("What is your age?"));
while(isNaN(age)){
    age =Number(prompt("What is your age?"));
}
// If age is negative 
if (age < 0) {
    console.log("Come back once you're out of the womb");
}

// if age is 21
if (age===21) {
    console.log("Happy 21st Birthday!");
}

// If age is odd
if (age % 2 !== 0) {
    console.log("Your age is odd!");
}

// If age is perfect square
// if (age % Math.sqrt(age)===0) {
//     console.log("Your age is a perfect square!");
// }                        OR
// if ((Math.sqrt(age) + '').includes('.')===false) {
//     console.log("Your age is a perfect square!");
// }                        OR
// if (!String(Math.sqrt(age)).includes('.')) {
//     console.log("Your age is a perfect square!");
// }                        OR

