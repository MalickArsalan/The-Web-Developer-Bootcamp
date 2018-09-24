let obj ={
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob","tina"],
    add: function (x,y) {
        return x +y;
    }
}

console.log();
// console is object 
// log() is method of object "console"

// Function for Dog to speak
function speak(){
    return "WOOF!";
}

// Function for cat to Speak
function speak(){
    return "MEOW!";
}
// by writing the function for cat, funcion of dog override
// to overcome this we can create two objects

let cats = {};
cats.speak = function speak() {
    return "MEOW!";
};

let dogs = {};

dogs.speak= function speak() {
    return "WOOF";
}

dogs.speak();
cats.speak();

// Understanding "this" Keywword
let comments = {};
comments.data= ["Good Job!","Bye","Lame..."];
comments.print = function (){
    this.data.forEach(el => {  // Over here this  referes to object "comments"
        console.log(el);
    });
};
