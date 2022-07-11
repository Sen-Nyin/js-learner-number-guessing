"use strict";

function setRandomNumber(max) {
  return Math.trunc(Math.random() * max) + 1;
}

let secretNumber = setRandomNumber(20);
let score = 20;
let highscore = 0;

const setMessageText = function (message) {
  document.querySelector(".message").textContent = message;
};
const setScoreText = function (score) {
  document.querySelector(".score").textContent = score;
};
const setNumberText = function (number) {
  document.querySelector(".number").textContent = number;
};
const setBodyBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const setNumberContainerWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

// clicks on 'Check' button
document.querySelector(".check").addEventListener("click", function () {
  const GUESS = Number(document.querySelector(".guess").value);

  // no input
  if (!GUESS) {
    setMessageText("No number entered!");
  }
  // guessed correctly
  else if (GUESS === secretNumber) {
    setMessageText("✅ You got it!");
    setBodyBackgroundColor("#60b347");
    setNumberContainerWidth("30rem");
    setNumberText(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // guess too high or too low
  else {
    if (score > 1) {
      score--;
      setScoreText(score);
      setMessageText(
        `${GUESS > secretNumber ? "⬇️ Too HIGH" : "⬆️ Too LOW"} Try again!`
      );
    } else {
      setMessageText("🤡 You Lose!");
      setScoreText(0);
    }
  }
});

// reset game
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = setRandomNumber(20);
  score = 20;

  setNumberContainerWidth("15rem");
  setBodyBackgroundColor("#222222");
  setMessageText("Start guessing...");
  setScoreText(score);
  setNumberText("?");
  document.querySelector(".guess").value = "";
});
