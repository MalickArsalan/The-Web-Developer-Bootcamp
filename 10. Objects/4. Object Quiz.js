//          Excercise 1
let someObject ={};

someObject._name = "Hedwig"; // Valid
someObject.age=6; // Valid

let prop = "color";
someObject[prop]= "red";  // Valid

someObject.123 = true; // In-valid

//          Excercise 2

let someObject2 = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

// Write a code to retrieve "Malfoy" from someObject1
// Go one "layer" at a time!

someObject2.friends[0].name;