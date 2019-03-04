// Foor Loops Problem Set

//1. Print all numbers between -10 and 19
console.log("Printing all numbers between -10 and 19");

for (let count=-10;count<=19;count+=1) {
    console.log(count);
}

//2. Print all even numbers between 10 and 40 
console.log("Print all even numbers between 10 and 40");

for (let even=10; even<=40;even+=2) {
        console.log(even);
        
}
//3. Print all odd numbers between 300 and 333

console.log("Printing all odd numbers between 300 and 333");
for (let odd =300;odd<=333;odd++){
    if (odd%2!==0) {
        console.log(odd);
    }
    
}

//4. Print all numbers divisible by 5 AND 3 between 5 and 50

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for (let divis =5;divis<=50;divis++){
    if (divis%5===0 && divis%3===0) {
        console.log(divis);   
    }
    
}