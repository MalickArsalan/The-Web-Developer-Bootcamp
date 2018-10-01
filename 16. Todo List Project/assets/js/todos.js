//  arking todo as copleted
//      My Way 
let list = document.getElementsByTagName("li");

for (let i = 0; li=list[i] ; i++){
    li.onclick = function(){
        this.classList.toggle("completed");
    }
}

//      Other way 

// Check Off Specefic Todos By Clicking
// $("li").click(function(){
    // $(this).css("color", "gray");
    // $(this).css("text-decoration", "line-through");

    // if li is gray       
    // if ($(this).css("color")=== "rgb(128, 128, 128)"){
        // turn it black
    //     $(this).css({
    //         color:"black",
    //         textDecoration: "none"
    //     });
    // }
    // else
    
    // else{
        //turn it gray
    //     $(this).css({
    //         color:"gray",
    //         textDecoration: "line-through"
    //     });
    // }
//      OR    
//     $(this).toggleClass("completed");
// });

//      Deleting Todo
//          My Way 
let span = document.getElementsByTagName("span");

for (let i = 0; i<span.length ; i++){
    span[i].onclick = function(event){
        let removeTarget =this.parentElement;
        removeTarget.style.opacity=0;
        removeTarget.style.webkitTransition="opacity 0.5s";
        removeTarget.style.mozTrMozTransition="opacity 0.5s";
        setTimeout(function(){
            removeTarget.remove();
        },500);
        event.stopPropagation();
    };
}

//      Other Way 
// $("span").click(function(event){
//     $(this).parent().fadeOut(500,function () {
//        $(this).remove();
//     });
//     event.stopPropagation();
// });


//      Adding Todo
let input = document.querySelector("input[type='text']");

input.addEventListener("keypress",function(event) {
   if(event.which===13){
    // grabbing new todo text from input
    let todoText =this.value
    //create a new li and add to ul
    let unorderedList = document.getElementsByTagName("ul");
   }
});
