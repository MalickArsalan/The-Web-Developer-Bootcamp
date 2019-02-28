// Check Off Specefic Todos By Clicking
//      My Way
let list = document.getElementsByTagName("li");

for (let i = 0; li=list[i]; i++){
    li.onclick = markTodo;
}
function markTodo(){
    this.classList.toggle("completed");
}

// if (event.target !== event.currentTarget){
//    event.target.classToggle("completed");
// }
// event.stopPropagation();



// let list = document.querySelectorAll("li");

// for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener("click",function () {
//         this.classList.toggle("completed");
//     });
// }
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

//      OR 
// $("ul").on("ul","li",function(){
//     $(this).toggleClass("completed");
// });


//      Deleting Todo
//          My Way
let span = document.getElementsByTagName("span");

for (let i = 0; i < span.length; i++) {
    span[i].onclick = deleteTodo;
}

function deleteTodo(event) {
    let removeTarget = this.parentElement;
    removeTarget.style.opacity = 0;
    removeTarget.style.webkitTransition = "opacity 0.5s";
    removeTarget.style.mozTrMozTransition = "opacity 0.5s";
    setTimeout(function () {
        removeTarget.remove();
    }, 500);
    event.stopPropagation();
}

//      Other Way
// $("span").click(function(event){
//     $(this).parent().fadeOut(500,function () {
//        $(this).remove();
//     });
//     event.stopPropagation();
// });

//      OR
// $("ul").on("click","span",function (event) {
//     $(this).parent().fadeOut(500, function () {
//         $(this).remove();
//     });
//     event.stopPropagation();
// });


//      Adding Todo
let input = document.querySelector("input[type='text']");

input.addEventListener("keypress", function (event) {
    if (event.which === 13) {
        // grabbing new todo text from input
        let todoText = this.value;
        this.value = "";
        //create a new li and add to ul
        let unorderedList = document.getElementsByTagName("ul");
        let listNode = document.createElement("li");
        let spanNode = document.createElement("span");
        spanNode.innerHTML = "<i class='fa fa-trash'></i>";
        spanNode.onclick= deleteTodo;
        let textNode  = document.createTextNode(todoText);
        listNode.appendChild(spanNode);
        listNode.appendChild(textNode);
        listNode.onclick = markTodo;
        unorderedList[0].appendChild(listNode);
        
    }
});


//      Other Way

// $("input[type='text']").keypress(function(event){
//     if(event.which===13){
//         //grabbimg new todo text from input
//         let todoText = $(this).val();
//         $(ul).append("<li><span>X</apan> " + todoText + "</li>");
//     }
// });


//      Toggle Input
let plus = document.getElementById("plus");
plus.onclick = function(){
    input.classList.toggle("toggle-content");
};