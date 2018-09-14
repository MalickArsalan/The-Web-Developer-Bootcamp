//1. Print all even numbers between 1 and 50 
console.log("Print all even numbers between 1 and 50");

for (let even=1; even<=50;even+=1) {
        if (even%2===0)
        {
            console.log(even);
        }
        
}

//1. Print all even numbers between 1 and 50 
console.log("Print all even numbers between 1 and 50");
let even = 1;

while (even<=50) {
    if (even%2===0){
        console.log("Output: " + even);
    }
    even+=1;
}

//2. Write code to create an ASCII art triangle like the one pictured.  Use for loops.
let str = "";
for (let x=1; x<=6;x+=1) {
    for (let y=1; y<=x;y+=1) {
        str +="$";
    }
    console.log(str);
    str="";
}

//3. Write a program that prints the numbers from 1 to 100. But for multiples 
//   of three print “Fizz” instead of the number and for the multiples of five 
//   print “Buzz”. For numbers which are multiples of both three and five 
//   print “FizzBuzz”.

for (let divis =1;divis<=100;divis++){
    if (divis%5===0 && divis%3===0) {
        console.log("FizzBuzz");   
    }
    else if(divis%3===0){
        console.log("Fizz");   
    }
    else if(divis%5===0){
        console.log("Buzz");   
    }
    else{
        console.log(divis);
    }
    
}