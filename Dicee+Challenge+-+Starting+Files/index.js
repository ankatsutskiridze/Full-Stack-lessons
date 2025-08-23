var randomNumber = Math.floor(Math.random() * 6) + 1;
var diceImage = "./images/dice" + randomNumber + ".png";
document.querySelector(".img1").setAttribute("src", diceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", diceImage2);

if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
