//          Array Methods

//1. Push/pop
//      Use Push to add to the end of an array
var colors = ["Red","Orange","Yellow"];
colors.push("Green");
// colors=["Red","Orange","Yellow","Green"]

//      Use Pop to remove the last item in an array
var temp =colors.pop(); // temp="Green"
// colorsop["Red","Orange","Yellow"]


//2. shift/unshift
//      Use unshift to add to the front of the array:
var newColors = ["Purple","Pink","Blue"];
newColors.unshift("Infrared");
// newColors = ["Purple","Pink","Blue","Infrared"]

//      use shift to reove the first item in an array 
var tempColor = newColors.shift();
// tempColor = "Infrared"
// newColors = ["Purple","Pink","Blue"];

//3. indexOf
//      Use indexOf() to find the index of an item in an array
let friends = ["Charlie","Liz","David","Mattias"];

// returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4

// returns -1 if the element is not present.
friends.indexOf("Hagrid");

//4. Slice
//    Use slice() to copy parts of an array
let fruits = ["Banana","Orange","Lemon","Apple","Mango"];

// Use slice to copy the 2nd and 3rd fruits
// Specify index where the new array starts(1) and ends(3)
let citrus = fruits.slice(1,3);

// This does not alter the the original fruits array
//citrus contains ["Orange","Lemon"]
// fruits contains ["Banana","Orange","Lemon","Apple","Mango"]

// you can alos use slice() to copy an entire array
var num = [1,2,3];
var otherNums = num.slice();
