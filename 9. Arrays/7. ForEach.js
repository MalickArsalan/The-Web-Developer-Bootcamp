//          Sample#1
function myForEach(arr,func){
    //loop through array
    for (let i = 0; i < arr.length; i++) {
        //cal func for each item in array
        func(arr[i]);    
    }
}
let colors = ["RED","ORANGE","YELLOW"];
//myForEach(colors,alert);

//      Annonymous Function

// Example run on Browser Console

// Example: 1
// (function(){
// 	console.log("IM A FUNCTION");
// })();

// Example: 2
// myForEach(colors ,function(){
// 	alert("HI...");
// });

myForEach(colors ,function(color){
	console.log(color);
});

Array.prototype.myForEach = function (func){
    for (let i=0;i<this.length;i++){
        func(this[i]);
    }
}
let friends = ["Tabinda","Dany Bhai","Babo Bhai"];

friends.myForEach(alert);

friends.myForEach(function(){
    
});