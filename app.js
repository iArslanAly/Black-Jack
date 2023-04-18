let out = document.getElementById("paragraph")
let firstCard = 2;
let secondCard = 3;
let sum = firstCard + secondCard;
// tosave the value we initialize the new variable
let hasBlackJack = false;
let isAlive = true;
let message=""

 // == abstract did not check dast tpw 
 // === strict, check data type

function startGame() {
    if (sum < 21) {
        message = "do you want a new card";
} else if (sum === 21) {
        message = "you got black jack";
    hasBlackJack = true;
}
// sum>21
else {
        message = "you are out of the game";
    isAlive = false;
}
    console.log(message);
    
}


