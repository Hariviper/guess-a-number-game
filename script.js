'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMsg = function (arg) {
  document.querySelector('.message').textContent = arg;
};

const loseMsg = function () {
  displayMsg('you have no chances left');
  document.querySelector('h1').textContent = '💀You LOST';
  document.querySelector('body').style.background = 'red';
  document.querySelector('.score').textContent = 0;
};

const scoreMsg = function (arg) {
  displayMsg(arg);
  score--;
  document.querySelector('.score').textContent = score;
};

const winningMatch = function () {
  displayMsg('You won the game🏆🥳');
  document.querySelector('body').style.background = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('h1').textContent = '🎊 Victory 🏆';
  document.querySelector('.number').textContent = secretNumber;
};

let number = document.querySelector('.number');
let guess = document.querySelector('.guess');
const againButton = function () {
  number.textContent = '?';
  guess.value = ' ';
  displayMsg('Start guessing...');
  document.querySelector('body').style.background = ' #222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = '20';
  secretNumber;
  document.querySelector('h1').textContent = 'Guess My Number!';
};

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let userGuess = Number(document.querySelector('.guess').value);

  if (!userGuess) {
    displayMsg('Please enter any number🙄😒');
    document.querySelector('body').style.background = '#092604';
  } else if (userGuess === secretNumber) {
    displayMsg('You won the game🏆🥳');
    winningMatch();
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (userGuess > secretNumber) {
    if (score > 1) {
      scoreMsg('Too Much 📈');
    } else {
      loseMsg();
    }
  } else if (userGuess < secretNumber) {
    if (score > 1) {
      scoreMsg('Too low📉');
    } else {
      loseMsg();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  againButton();

  // document.querySelector()
});
