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