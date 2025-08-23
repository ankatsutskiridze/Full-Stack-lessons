var randomNumber = Math.floor(Math.random() * 6) + 1;
var diceImage = "images/dice" + randomNumber + ".png";
document.getElementById("dice1").setAttribute("src", diceImage);

console.log(randomNumber);
