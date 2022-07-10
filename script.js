'use strict';

function setRandomNumber(max) {
  return Math.trunc(Math.random() * max) + 1;
}

let secretNumber = setRandomNumber(20);
let score = 20;
let highscore = 0;

const SET_MESSAGE_TEXT = function (message) {
  document.querySelector('.message').textContent = message;
};
const SET_SCORE = function (score) {
  document.querySelector('.score').textContent = score;
};
const SET_NUMBER = function (number) {
  document.querySelector('.number').textContent = number;
};
const SET_BODY_BACKGROUND_COLOR = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const SET_NUMBER_WIDTH = function (width) {
  document.querySelector('.number').style.width = width;
};

// clicks on 'Check' button
document.querySelector('.check').addEventListener('click', function () {
  const GUESS = Number(document.querySelector('.guess').value);

  // no input
  if (!GUESS) {
    SET_MESSAGE_TEXT('No number entered!');
  }
  // guessed correctly
  else if (GUESS === secretNumber) {
    SET_MESSAGE_TEXT('✅ You got it!');
    SET_BODY_BACKGROUND_COLOR('#60b347');
    SET_NUMBER_WIDTH('30rem');
    SET_NUMBER(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // guess too high or too low
  else {
    if (score > 1) {
      score--;
      SET_SCORE(score);
      SET_MESSAGE_TEXT(
        `${GUESS > secretNumber ? '⬇️ Too HIGH' : '⬆️ Too LOW'} Try again!`
      );
    } else {
      SET_MESSAGE_TEXT('🤡 You Lose!');
      SET_SCORE(0);
    }
  }
});

// reset game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = setRandomNumber(20);
  score = 20;

  SET_NUMBER_WIDTH('15rem');
  SET_BODY_BACKGROUND_COLOR('#222222');
  SET_MESSAGE_TEXT('Start guessing...');
  SET_SCORE(score);
  SET_NUMBER('?');
  document.querySelector('.guess').value = '';
});
