var dice = document.getElementById("dice1");
var dicee = document.getElementById("dice2");

function rollDiced(){

    dice.value = roll();
    dicee.value = roll();
}

document.querySelector("button").addEventListener("click", rollDiced);

function roll(){
    return(Math.floor(Math.random() * 7));
}