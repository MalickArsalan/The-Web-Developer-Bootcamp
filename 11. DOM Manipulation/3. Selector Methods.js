//          Excercise
// Open up the JS console and try these 4 lines:

// document.url;
// document.head;
// document.body;
// document.links;

//          Methods
// The document coes with a bunch of methods for selecting elements. 
// We are going to learn about the following 5:

// 1. document.getElementById();
// 2. document.getElementsByClassName();
// 3. document.getElementsByTagName();
// 4. document.querySelector();
// 5. document.querySelectorAll();

//          getElementById
// Takes a string argument and returns the one
// element with matching ID
let tag = document.getElementById("highlight");
let tags = document.getElementsByClassName("bolded");
let tagsName = document.getElementsByTagName("li");
let tagsH1 =  document.getElementsByTagName("h1")
