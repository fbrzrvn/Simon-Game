const signInSection = document.getElementById('sign-in');
const input = document.getElementById('username');
const startBtn = document.getElementById('start-btn');
const highScoresBtn = document.getElementById('high-scores-btn');
const highScoresSection =document.getElementById('high-scores');
const homeBtn = document.getElementById('home-btn');
const gameSection = document.getElementById('game');
const gameTitle = document.getElementById('game-title');

let user = {};
let users = [];
let score = 0;
let level = 0;
let buttonColor = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userChoicePattern = [];
let started = false;


input.addEventListener('keyup', () => {
  if (input.value.length != 0) {
    startBtn.disabled = false;
  } else {
    startBtn.disabled = true;
  }
})

startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  user = {
    name: input.value,
    score: score
  }
  users.push(user);
  signInSection.classList.toggle('hide');
  gameSection.classList.toggle('hide');
})

highScoresBtn.addEventListener('click', () => {
  signInSection.classList.toggle('hide');
  highScoresSection.classList.toggle('hide');
})

homeBtn.addEventListener('click', () => {
  highScoresSection.classList.toggle('hide');
  signInSection.classList.toggle('hide');
})

