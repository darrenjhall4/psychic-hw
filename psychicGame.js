var wins = 0;
var losses = 0;
var attempts = 10;
var usedArray = [];
var randomLetter = randomLetter;
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//Random number selector.
randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomLetter);

function jsGuess() {
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(randomLetter);
}

document.onkeyup = function(event) {
  var playerGuess = event.key;

  //updates wins
  if (playerGuess === randomLetter) {
    wins++;
    attempts = 10;
    usedArray = [];
    alert("You got it!");
  }

  //updates losses
  jsGuess();
  if (playerGuess !== randomLetter) {
    attempts--;
  }

  //if all guesses used, adds a loss and empties the letters already used
  if (attempts == 0) {
    losses++;
    usedArray = [];
    attempts = 10;
  }

  //prevents duplicates from re-printing to used array
  if (usedArray.indexOf(playerGuess) >= 0) {
  } else {
    //pushes wrong guesses to usedArray, displays in the html
    usedArray.push(playerGuess);
    document.getElementById("playerGuess").innerHTML = usedArray;
    console.log(usedArray);
  }
  //generates score
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("attempts").innerHTML = attempts;
};

confirm("Can you guess the random letter?");
