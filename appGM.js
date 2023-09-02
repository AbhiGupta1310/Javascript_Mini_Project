let gameSeq = [];
let userSeq = [];
let highScore = [];

let btns = ["dark-blue", "blue", "yellow", "beige"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let body = document.querySelector("body");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 150);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  // random btn choose
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  //   console.log(randIdx);
  //   console.log(randColor);
  //   console.log(randbtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
}

function checkAns(idx) {
  //   console.log(`curr lev : `, level);
  //   let idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <b>${level} </b> <br> Press any key to restart.`;
    gameOver();
    setTimeout(() => {
      body.style.backgroundColor = "white";
    }, 500);
    highScore.push(level);
    reset();
    // high();
    h3.innerHTML = `Your High Score is ${high()}`;
  }
}

function btnPress() {
  //   console.log(this);
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

function gameOver() {
  body.style.backgroundColor = "red";
}

function high() {
  highest = highScore[0];
  for (let i = 1; i <= highScore.length; i++) {
    // highest = highScore[i];
    if (highScore[i] > highest) {
      highest = highScore[i];
    }
  }
  return highest;
}
