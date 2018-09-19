function printReverse(array){
    
    for(let x=array.length;x>=0;x--){
        console.log(array[x]);
    }
}

function isUniform(array){
    let response = false;

    for(let x=0;x<=array.length-1;x++){
        if(x!==array.length-1){
            if(array[x]===array[x+1]){
                response=true;  
            }
            else{
                return false;
            }
        }
    }
    return response;
}

//          OR Solution
// function isUniform(arr){
//     let first = [0];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]!==first){
//             return false;
//         }        
//     }
//     return true;
// }

function sumArray(array) {
    let sum = 0;
    array.forEach(x => {
        sum+=x;
    });
    return sum;
}

function max(array) {
    let sum = 0;
    array.forEach(x => {
        if(sum<x){
            sum=x;
        }
    });
    return sum;
}

//          OR Solution
// function max(array){
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] > max){
//             max = array[i];
//         }        
//     }
//     return max;
// }