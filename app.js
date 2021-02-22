'use strict';
const player1 = document.querySelector('.player--1'),
  player2 = document.querySelector('.player--2'),
  player1Score = document.querySelector('.player--1 .score'),
  player2Score = document.querySelector('.player--2 .score'),
  player1Current = document.querySelector('.player--1 .current-score'),
  player2Current = document.querySelector('.player--2 .current-score'),
  newGameBtn = document.querySelector('.new-game'),
  rollDiceBtn = document.querySelector('.roll-dice'),
  holdBtn = document.querySelector('.hold'),
  gameMassage = document.querySelector('.game-message'),
  p1TotalScore = document.querySelector('.p1TotalScore'),
  p2TotalScore = document.querySelector('.p2TotalScore'),
  copic = document.querySelector('.copic');

let p1Score = 0,
  p2Score = 0,
  p1Current = 0,
  p2Current = 0;

//
function rollDiceNumFunc(num) {
  for (let i = 0; i < 7; i++) copic.classList.remove(`copic--${i}`);
  copic.classList.add('active', `copic--${num}`);
}
//
function togglePlayers(player) {
  if (player1.classList.contains('active')) {
    player1.classList.remove('active');
    p1TotalScore.classList.add('active');
    p2TotalScore.classList.remove('active');
    player2.classList.add('active');
  } else {
    player2.classList.remove('active');
    player1.classList.add('active');
    p2TotalScore.classList.add('active');
    p1TotalScore.classList.remove('active');
  }
  if (player === 'player1') {
    player1.classList.add('active');
    player2.classList.remove('active');
    p2TotalScore.classList.add('active');
    p1TotalScore.classList.remove('active');
  }
  if (player === 'player2') {
    player2.classList.add('active');
    player1.classList.remove('active');
    p1TotalScore.classList.add('active');
    p2TotalScore.classList.remove('active');
  }
}
//
function showMessage(message) {
  copic.classList.remove('active');
  gameMassage.classList.add('active');
  gameMassage.textContent = message;
}

// EVENT ROLL DICE BUTTON
rollDiceBtn.addEventListener('click', rollDiceFunc);
// EVENT HOLD BUTTON
holdBtn.addEventListener('click', holdFunc);
// EVENT NEW GAME BUTTON
newGameBtn.addEventListener('click', newGameFunc);

// ROLL DICE FUNCTION
function rollDiceFunc() {
  const rollDiceNum = Math.trunc(Math.random() * 6 + 1);
  rollDiceNumFunc(rollDiceNum);

  if (player1.classList.contains('active')) {
    if (rollDiceNum === 1) {
      p1Current = 0;
      player1Current.textContent = p1Current;
      //toggle player
      togglePlayers();
    } else {
      p1Current += rollDiceNum;
      player1Current.textContent = p1Current;
    }
  } else if (player2.classList.contains('active')) {
    if (rollDiceNum === 1) {
      p2Current = 0;
      player2Current.textContent = p2Current;
      //toggle player
      togglePlayers();
    } else {
      p2Current += rollDiceNum;
      player2Current.textContent = p2Current;
    }
  }
}

// HOLD BUTTON FUNCTION
function holdFunc() {
  if (player1.classList.contains('active')) {
    p1Score += p1Current;
    player1Score.textContent = p1Score;
    p1TotalScore.firstElementChild.textContent = p1Score;
    p1Current = 0;
    player1Current.textContent = p1Current;
    if (p1Score >= 100) {
      showMessage('player 1 win');
      rollDiceBtn.disabled = true;
      holdBtn.disabled = true;
      newGameBtn.classList.add('active');
      // togglePlayers('player1');
    } else {
      togglePlayers();
    }
  } else {
    p2Score += p2Current;
    player2Score.textContent = p2Score;
    p2TotalScore.firstElementChild.textContent = p2Score;
    p2Current = 0;
    player2Current.textContent = p2Current;
    if (p2Score >= 100) {
      showMessage('player 2 win');
      rollDiceBtn.disabled = true;
      holdBtn.disabled = true;
      newGameBtn.classList.add('active');
      // togglePlayers('player2');
    } else {
      togglePlayers();
    }
  }
}
//
function newGameFunc() {
  gameMassage.classList.remove('active');
  copic.classList.remove('active');
  p1Score = 0;
  player1Score.textContent = p1Score;
  p1TotalScore.firstElementChild.textContent = p1Score;
  console.log(p1TotalScore);

  p2Score = 0;
  player2Score.textContent = p2Score;
  p2TotalScore.firstElementChild.textContent = p2Score;

  p1Current = 0;
  player1Current.textContent = p1Current;
  p2Current = 0;
  player2Current.textContent = p2Current;
  rollDiceBtn.disabled = false;
  holdBtn.disabled = false;
  newGameBtn.classList.remove('active');
}
