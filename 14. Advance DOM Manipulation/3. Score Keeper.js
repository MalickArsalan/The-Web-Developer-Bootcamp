let p1Button = document.querySelector("#p1");
let p2Button =  document.getElementById("p2");
let resetButton = document.querySelector("#reset")
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let numInput = document.querySelector('input[type="number"]');
var winningScoreDisplay = document.querySelector("p span")
let p1Score = 0; 
let p2Score = 0; 
let winningScore = 5
let gameOver = false;

p1Button.addEventListener("click", function(){
    if(!gameOver)
    {
        
        if(p1Score === winningScore)
        {
            p1Display.classList.add("winner")
            gameOver = true
        }
        else{
            p1Score++;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver)
    {
        
        if(p2Score === winningScore)
        {
            p2Display.classList.add("winner")
            gameOver = true
        }
        else{
            p2Score++;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    gameOver = false;
    p1Score =  p1Display.textContent = 0; 
    p2Score =  p2Display.textContent = 0;
    p1Display.classList.remove("winner")
    p1Display.classList.remove("winner")
}

numInput.addEventListener("change",function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});