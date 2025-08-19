var numberOfBottles = 99;

while (numberOfBottles >= 0) {
  var bottleWord = "bottles";

  if (numberOfBottles === 1) {
    bottleWord = "bottle";
  }

  if (numberOfBottles > 0) {
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
  } else {
    console.log("No more bottles of beer on the wall.");
  }

  numberOfBottles--;
}

function fibonacciGenerator(n) {
  var output = [];

  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[i - 2] + output[i - 1]);
    }
  }

  return output;
}
