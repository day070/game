const DRAW = "Draw";
const P_WIN = "Player Win";
const C_WIN = "Computer Win";

let tanya = document.getElementById("tanya");
let iya = document.getElementById("iya");
let tidak = document.getElementById("tidak");

let initScorPlayer = 0;
let initScorComputer = 0;

let userScor = document.getElementById("user-scor");
let botScor = document.getElementById("bot-scor");

let imgUser = document.getElementById("img-user");
let imgBot = document.getElementById("img-bot");

let playBtn = document.getElementsByClassName("play-btn");

let imgPath = "images";

let options = ["batu", "kertas", "gunting"];

function play(option) {
  userDecision = setImage(option);
  comDecision = setImageBot();

  setTheWinner(userDecision, comDecision);
}

function setImage(option) {
  imgUser.src = imgPath + "/" + option + ".png";

  return option;
}

function setImageBot() {
  let BotDecision = options[Math.floor(Math.random() * options.length)];
  imgBot.src = imgPath + "/" + BotDecision + ".png";

  return BotDecision;
}

function cek() {
  tanya.classList.add("active");
  // Tambahkan penerima acara ke tombol "iya"
  iya.addEventListener("click", () => {
    window.location = "index.html";
    tanya.classList.remove("active");
  });
  tidak.addEventListener("click", () => {
    tanya.classList.remove("active");
  });
}
function setTheWinner(userDecision, comDecision) {
  let resul = "";

  if (userDecision == "batu") {
    switch (comDecision) {
      case "batu":
        resul = DRAW;
        break;
      case "kertas":
        resul = C_WIN;
        break;
      case "gunting":
        resul = P_WIN;
        break;
    }
  }

  if (userDecision == "kertas") {
    switch (comDecision) {
      case "batu":
        resul = P_WIN;
        break;
      case "kertas":
        resul = DRAW;
        break;
      case "gunting":
        resul = C_WIN;
        break;
    }
  }

  if (userDecision == "gunting") {
    switch (comDecision) {
      case "batu":
        resul = C_WIN;
        break;
      case "kertas":
        resul = P_WIN;
        break;
      case "gunting":
        resul = DRAW;
        break;
    }
  }

  scoring(resul);
}

function scoring(resul) {
  if (resul == "Player Win") {
    initScorPlayer++;
    userScor.innerHTML = initScorPlayer;

    if (initScorPlayer == 3) {
      for (let i = 0; i < playBtn.length; i++) {
        playBtn[i].setAttribute("disabled", "");
      }
      userScor.innerHTML = P_WIN;
      cek();
    }
  }
  if (resul == "Computer Win") {
    initScorComputer++;
    botScor.innerHTML = initScorComputer;

    if (initScorComputer == 3) {
      for (let i = 0; i < playBtn.length; i++) {
        playBtn[i].setAttribute("disabled", "");
      }
      botScor.innerHTML = C_WIN;
      cek();
    }
  }
}

// function playAgain(winner) {
//   if (confirm(winner + ". play again?")) {
//     // if (confirm(winner + ". play again?")) {
//     //   window.location = "index.html";
//     // }
//     initScorPlayer = 0;
//     initScorComputer = 0;

//     userScor.innerHTML = initScorPlayer;
//     botScor.innerHTML = initScorComputer;

//     for (let i = 0; i < playBtn.length; i++) {
//       playBtn[i].removeAttribute("disabled", "");
//     }
//     setImage("batu");
//     setImageBot("batu");
//   }
// }
