// let firstLI = document.querySelector("li");
let allLI = document.querySelectorAll("li");

debugger;
for (let i = 0; i < allLI.length; i++) {
    allLI[i].addEventListener("mouseover",function () {
        // this.style.color="green";
        this.classList.add("isHover");
    });
    allLI[i].addEventListener("mouseout",function () {
        // this.style.color="black ";
        this.classList.remove("isHover");
    });
    allLI[i].addEventListener("click",function(){
        this.classList.toggle("done");
    });
}

// firstLI.addEventListener("mouseover",function () {
//     //    console.log("MOUSE OVER"); 
//     firstLI.style.color="green";
// });
// firstLI.addEventListener("mouseout",function(){
//     firstLI.style.color="black";
// });