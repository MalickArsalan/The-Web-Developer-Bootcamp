// While Loops Problem Set

//1. Print all numbers between -10 and 19
console.log("Printing all numbers between -10 and 19");
var count = -10;

while (count<=19) {
    console.log(count);
    count++;
}

//2. Print all even numbers between 10 and 40 
console.log("Print all even numbers between 10 and 40");
var even = 10;

while (even<=40) {
        console.log(even);
        even+=2;
}
//3. Print all odd numbers between 300 and 333
var odd =300;
console.log("Printing all odd numbers between 300 and 333");
while (odd<=333){
    if (odd%2!==0) {
        console.log(odd);
    }
    odd++;
}

//4. Print all numbers divisible by 5 AND 3 between 5 and 50
var divis =5;
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while (divis<=50){
    if (divis%5===0 && divis%3===0) {
        console.log(divis);   
    }
    divis++;
}