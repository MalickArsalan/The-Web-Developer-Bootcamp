function average(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.round(sum/(arr.length));
}

console.log("Average score for environment science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

console.log("Average score for organic chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68