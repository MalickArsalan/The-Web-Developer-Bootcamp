// //          My Way

// let body = document.getElementsByTagName("body");
// function colorToggle(){
//     body[0].classList.toggle('color');
// }

//          Colt Steel
let button = document.querySelector("button");
let isPurple = false;
button.addEventListener("click",function(){
    // One way
    
    // if (isPurple){
    //     document.body.style.background= 'white';
    //     // isPurple= false;
    // }
    // else{
    //     document.body.style.background= 'pink';
    //     // isPurple = true;
    // }
    // isPurple = !isPurple;

    // Second Way
    document.body.classList.toggle("color");
});