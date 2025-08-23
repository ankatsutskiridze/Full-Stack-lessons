var randomNumber = Math.floor(Math.random() * 6) + 1; // 1-დან 6-მდე რანდომი
var diceImage = "./images/dice" + randomNumber + ".png"; // შექმნილია სურათის სახელი
console.log(diceImage);
document.querySelector(".img1").setAttribute("src", diceImage); // მარცხენა <img> ჩასმა
console.log(randomNumber);
