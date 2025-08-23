var randomNumber = Math.floor(Math.random() * 6) + 1; // 1-დან 6-მდე რანდომი
var diceImage = "./images/dice" + randomNumber + ".png"; // შექმნილია სურათის სახელი
console.log(diceImage);
document.querySelector(".img1").setAttribute("src", diceImage); // მარცხენა <img> ჩასმა
console.log(randomNumber);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "./images/dice" + randomNumber2 + ".png";
console.log(diceImage2);
document.querySelector(".img2").setAttribute("src", diceImage2);
console.log(randomNumber2);
