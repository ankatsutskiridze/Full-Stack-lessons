// ფერების სია
var buttonColours = ["red", "blue", "green", "yellow"];

// თამაშის მიერ შექმნილი მიმდევრობა
var gamePattern = [];

// მომხმარებლის მიერ დაკლიკილი მიმდევრობა
var userClickedPattern = [];

// ფუნქცია, რომელიც ქმნის ახალ შემთხვევით ფერს
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4); // 0-დან 3-მდე
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  // ღილაკის ანიმაცია (მიბრწყინება)
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  // შესაბამისი ხმის დაკვრა
  playSound(randomChosenColor);
}

// ღილაკზე დაკლიკების დამჭერი
$(".btn").click(function () {
  // ვინ დაჭირა - ღილაკის id
  var userChosenColour = $(this).attr("id");

  // მომხმარებლის არჩევანის დამატება
  userClickedPattern.push(userChosenColour);

  // კონსოლში გამოვიტანოთ, რომ ვნახოთ შედეგი
  console.log(userClickedPattern);

  // ხმის დაკვრა
  playSound(userChosenColour);
});

// ხმის დაკვრის ფუნქცია
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
