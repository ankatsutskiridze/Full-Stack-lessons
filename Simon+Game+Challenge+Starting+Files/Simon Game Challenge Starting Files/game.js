// ფერების სია
var buttonColours = ["red", "blue", "green", "yellow"];

// თამაშის მიერ შექმნილი მიმდევრობა
var gamePattern = [];

// მომხმარებლის მიერ დაკლიკილი მიმდევრობა
var userClickedPattern = [];

// Level
var level = 0;

// თამაშის დაწყების სტატუსი
var started = false;

// კლავიშზე დაჭერის დამჭერი
$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// ღილაკზე დაკლიკების დამჭერი
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  // მომხმარებლის პასუხების შემოწმება
  checkAnswer(userClickedPattern.length - 1);
});

// ფუნქცია, რომელიც ქმნის ახალ შემთხვევით ფერს
function nextSequence() {
  userClickedPattern = []; // მომხმარებლის მიმდევრობა იფარება ყოველი ახალი Level-ზე
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

// მომხმარებლის პასუხების შემოწმების ფუნქცია
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    // თუ მომხმარებელმა დაამთავრა სექვენსი
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}

// თამაშის თავიდან დაწყების ფუნქცია
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

// ხმის დაკვრის ფუნქცია
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// ანიმაციის ფუნქცია
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
