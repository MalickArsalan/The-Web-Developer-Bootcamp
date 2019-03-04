// Supposed we want to model a single person: name, age and city

// I could use an array like this
// let person = ["Cindy",32,"Missoula"];

// to retrive the person's hometown
person[2]; //this is not meaningful code

// what if I accidently reversed the order?
let person2 =["Travis","Los Angeles", 21];

//          Objects
// Now for such case Object is perfect
let person1 = {
    name: "Cindy",
    age: 32,
    city: "Missoula"
};

// It stores data in key-value pairs

// Note: unlike arrays, objects hav no order

//          Retrieving Data
// You have two choices: bracket and dot notation

// Bracket Notation, similar to arrays:
console.log(person["name"]);
// dot notation:
console.log(person.name);

// There are a few differences between the 2 notations:
// you cannot use dot notations if the property starts with a number
someObject.1blah;    //Invalid
someObject["1blah"]; //Valid 

// you can lookup using a variable with bracket notation
let str = "name";
someObject.str;  // does not look for "name"
someObject[str]; // does evaluate str and looks for "name"

// you cannot use dot notation for property names with space
someObject.fav color  // Invalid
someObject["fav color"]; 

//          Updating Data
// Just like an array: access a property and reassign it

// to update age
person1["age"] +=1;
// to update city
person1.city = "London";

//          Creating Objects
// Like arrays, there are a few methodss of initializing objects

// make an empty object and then add to it
let student = {};
student.name= "Travis";
student.age= 21;
student.city = "LA"

// all at once
let Teacher= {
    name: "Travis",
    age: 21,
    City: "KHI"
};

// Another way of initializing an Object
let customer = new Object();
customer.name = "Travis";
customer.age= 21;
customer.city = "LHR";

// Objects can hold any sort of data
let junkObject = {
    age: 57,
    color: "Purple",
    isHungry: true,
    friends: ["Tabinda"],
    pet: {
        name: "Cappuccino",
        species: "Cat",
        age: 1.5
    }
};
