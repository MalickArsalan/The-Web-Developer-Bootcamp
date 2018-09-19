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

(function(){
    console.log();
});