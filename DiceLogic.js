const dice1 = document.createElement("p");
const dice2 = document.createElement("p");

function rollDiced(){
    dice1.textContent = roll();
    dice2.textConent = roll();

    document.body.appendChild(dice1);
    document.body.appendChild(dice2);
}

document.querySelector("button").addEventListener("click", rollDiced);

function roll(){
    document.body.append(Math.floor(Math.random() * 7));
}