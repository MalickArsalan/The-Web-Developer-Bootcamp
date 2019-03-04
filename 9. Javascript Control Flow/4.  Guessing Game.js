//Create Secret Number
let secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess A Number"));

//check if guess is correct
if (secretNumber===guess){
    alert("YOU GOT IT RIGHT");
}
//otherwise if guess is higher
else if(guess > secretNumber ){
    alert("Too high, Guess again!")
}
//otherwise if guess is low
else{
    alert("Too low, Guess again!")
} 
