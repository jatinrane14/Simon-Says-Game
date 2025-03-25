let options = ["green", "red", "yellow", "blue"];
let gameSequence = [];
let userSequence = [];
let level = 0;
let started = false;
let para = document.querySelector("p");
document.querySelector(".color-panel").disabled = true;
document.addEventListener("keypress", () => {
  if (!started) {
    console.log("Game started");
    started = true;
    document.querySelector(".color-panel").disabled = false;
    levelUp();
  }
});
function flash(btn) {
  btn.classList.add("flash");
  setInterval(() => {
    btn.classList.remove("flash");
  }, 250);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setInterval(() => {
    btn.classList.remove("userflash");
  }, 200);
}
function levelUp() {
  userSequence = [];
  level++;
  para.innerText = `Level ${level}`;
  let randomIdx = Math.floor(Math.random() * 3);
  console.log(randomIdx);
  let randomColor = options[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);
  gameSequence.push(randomColor);
  flash(randomBtn);
}
let buttons = document.querySelectorAll(".color-panel");
function btnClick() {
  if (started) {
    userSequence.push(this.classList[1]);
    console.log(gameSequence);
    console.log(userSequence);
    let flag = true;
    userflash(this);
    checkAns(userSequence.length - 1);
  }
}
function checkAns(idx) {
  if (userSequence[idx] === gameSequence[idx]) {
    if (userSequence.length == gameSequence.length) {
      setTimeout(levelUp, 450);
    }
  } else {
    para.innerText = "Game Over";
    document.querySelector(".color-panel").disabled = true;
    started = false;
  }
}
for (let btn of buttons) {
  btn.addEventListener("click", btnClick);
}
