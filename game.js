const gameSection = document.getElementById('game');
const gameTitle = document.getElementById('game-title');
const gameBtns = Array.from(document.getElementsByClassName('game__btn'));
const gameOverSection = document.getElementById('game-over');
const scoreTextElement = document.getElementById('score');
const input = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const highScoresBtn = document.getElementById('high-scores-btn');
const highScoresSection =document.getElementById('high-scores');
const playAgainBtn = document.getElementById('play-again-btn');

let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userChoicePattern = [];
let started = false;
let level = 0;
let score = 0;
let user = {};
let users = [];


document.addEventListener('keypress', () => {
  if (!started) {
    gameTitle.innerText = `Level ${level}`;
    nextSequence();
    started = true;
  }
})

gameBtns.forEach(el => {
  el.addEventListener('click', () => {
    let userChosenColor = el.id;
    userClickedPattern.push(userChosenColor);
    animate(el, userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length -1);
  })
})

input.addEventListener('keyup', () => {
  if (input.value.length != 0) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
})

saveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  user = {
    name: input.value,
    score: score
  }
  users.push(user);
})

highScoresBtn.addEventListener('click', () => {
  gameOverSection.classList.toggle('hide');
  highScoresSection.classList.toggle('hide');
})

playAgainBtn.addEventListener('click', () => {
  gameOverSection.classList.toggle('hide');
  gameSection.classList.toggle('hide');
  startOver();
})

function nextSequence() {
  userClickedPattern = [];
  level++;
  score += level;
  gameTitle.innerText = `Level ${level}`;

  let randomNumber = Math.floor(Math.random()*4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  gameBtns.forEach(el => animate(el, randomChosenColor));
  playSound(randomChosenColor);
}

function checkAnswer(currentColor) {
  if (gamePattern[currentColor] === userClickedPattern[currentColor]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout( () => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound('wrong');
    document.body.classList.add('game-over');
    setTimeout( () => {
      document.body.classList.remove('game-over');
    }, 200);
    setTimeout( () => {
      gameOver();
    }, 700);
  }
}

function animate(el, value) {
  if (el.id === value) {
    el.classList.add('pressed');
    setTimeout( () => {
      el.classList.remove('pressed');
    }, 200)
  }
}

function playSound(name) {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function gameOver() {
  gameSection.classList.toggle('hide');
  gameOverSection.classList.toggle('hide');
  scoreTextElement.innerText = score;
}

function startOver() {
  gameTitle.innerText = 'Press a key to Start';
  level = 0;
  score = 0;
  gamePattern = [];
  started = false;
}









