let userInput = document.querySelector(".guess");
let remarks = document.querySelector(".message");
let result = document.querySelector(".number");
let body = document.getElementById("body");
let right = document.querySelector(".right");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let againBtn = document.querySelector(".again");
let x = 0;
let scoreCount = 20;
let highscoreCount = 0;

const generateRandomNumber = () => {
  x = Math.round(Math.random() * 20);
  console.log(x);
};

const checkGuess = () => {
  console.log(Number(userInput.value));
  if (Number(userInput.value) == x) {
    remarks.innerHTML = "You guessed it right!";
    result.innerHTML = x;
    body.style.backgroundColor = "#6CA651";

    if (scoreCount >= highscoreCount) {
      highscoreCount = scoreCount;
      highscore.innerHTML = highscoreCount;
    }
    if (scoreCount == 20) {
      remarks.innerHTML = "You are a genius!!!";
    }
  } else if (Number(userInput.value) > x) {
    remarks.innerHTML = "Your guess is too high!";
    body.style.backgroundColor = "blueviolet";
    --scoreCount;
    score.innerHTML = scoreCount;
    if (Number(userInput.value) >= 20.1) {
      remarks.innerHTML = "Number must be 20 and below";
      body.style.backgroundColor = "red";
    }
    if (Number(userInput.value) % 1 !== 0 && Number(userInput.value) < 20) {
      remarks.innerHTML = "Decimal point is not allowed!";
      body.style.backgroundColor = "red";
    }
    if (scoreCount <= 10) {
      remarks.innerHTML = "You're running out of chances!";
      body.style.backgroundColor = "red";
    }
    if (scoreCount <= 0) {
      remarks.innerHTML = "You lost the game!";
      body.style.backgroundColor = "red";
      score.innerHTML = 0;
    }
  } else {
    remarks.innerHTML = "Your guess is too low!";
    body.style.backgroundColor = "red";
    --scoreCount;
    score.innerHTML = scoreCount;
    if (Number(userInput.value) < 0) {
      remarks.innerHTML = "Number must be 0 and above!";
    }
    if (scoreCount <= 10) {
      remarks.innerHTML = "You're running out of chances!";
      body.style.backgroundColor = "red";
    }
    if (scoreCount <= 0) {
      remarks.innerHTML = "You lost the game!";
      score.innerHTML = 0;
    }

    if (
      Number(userInput.value) % 1 !== 0 &&
      Number(userInput.value) > 0 &&
      Number(userInput.value) < 21
    ) {
      remarks.innerHTML = "Decimal point is not allowed!";
    }
  }
};

const resetGame = () => {
  scoreCount = 20;
  score.innerHTML = scoreCount;
  remarks.innerHTML = "Start guessing...";
  body.style.backgroundColor = "#222";
  result.innerHTML = "?";
  right.style.color = "#eee";
  userInput.value = "";
  generateRandomNumber();
};
