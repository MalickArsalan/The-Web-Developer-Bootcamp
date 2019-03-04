//              My Way          
// let button = document.getElementsByTagName("button");
// let paragraph = button[0].nextSibling.nextSibling;

// function changeParagraph(){
//     paragraph.innerHTML= "Some one clicked the button!";
// }


//              Colt Steel

// let button = document.querySelector("button");
// let paragraph = document.querySelector("p");

// // SETUP CLICK LISTENER
// button.addEventListener("click", function(){
//     paragraph.textContent = "Someone Clicked the Button";
// });


// Without using Anonyous Function

let button = document.querySelector("button");
let paragraph = document.querySelector("p");

button.addEventListener("click", "changeText");

function changeText(){
    paragraph.textContent = "Someone Clicked the Button";
}
