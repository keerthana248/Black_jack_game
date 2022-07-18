function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let start = document.getElementById("start");
let add = document.getElementById("add");
let hold = document.getElementById("hold");
let mess = document.getElementById("message-el");
let cImg = document.getElementById("c-img");
let dImg = document.getElementById("d-img");
let blackJack = false;
let isAlive = true;
let dFirstCard = 0;
let dSecondCard = 0;
let sum = 0;
let message = "";
let dSum = 0;
const image = [
  "img/back.jpg",
  "img/A.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.png",
  "img/7.png",
  "img/8.png",
  "img/9.png",
  "img/10.png",
  "img/J.png",
  "img/Q.png",
  "img/K.png"
];

function startGame() {
  let firstCard = randomNum(1, 11);
  let secondCard = randomNum(1, 11);
  sum = firstCard + secondCard;
  dFirstCard = randomNum(1, 11);
  dSecondCard = randomNum(1, 11);
  dSum = dFirstCard + dSecondCard;
  cImg.innerHTML = `<img src="${image[firstCard]}">
      <img src="${image[secondCard]}">`;
  document.getElementById("c-sum").textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "want more?";
    dImg.innerHTML = `<img src="${image[0]}">
          <img src="${image[dSecondCard]}">`;
    document.getElementById("d-sum").textContent = "Sum: " + dSecondCard;
    start.classList.add("inactive");
    add.classList.remove("inactive");
    hold.classList.remove("inactive");
  } else if (sum === 21) {
    message = "Blackjack ! You win !!";
    dImg.innerHTML = `<img src="${image[dFirstCard]}">
          <img src="${image[dSecondCard]}">`;
    document.getElementById("d-sum").textContent = "Sum: " + dSum;
    blackJack = true;
    start.classList.remove("inactive");
    add.classList.add("inactive");
    hold.classList.add("inactive");
  } else {
    message = " Dealer Wins !!";
    dImg.innerHTML = `<img src="${image[dFirstCard]}">
          <img src="${image[dSecondCard]}">`;
    document.getElementById("d-sum").textContent = "Sum: " + dSum;
    isAlive = false;
    start.classList.remove("inactive");
    add.classList.add("inactive");
    hold.classList.add("inactive");
  }
  document.getElementById("message-el").textContent = message;
}

function addCard() {
  let thirdCard = randomNum(1, 11);
  sum += thirdCard;
  cImg.innerHTML += `<img src="${image[thirdCard]}">`;
  document.getElementById("c-sum").textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "want more?";
    dImg.innerHTML = `<img src="${image[0]}">
          <img src="${image[dSecondCard]}">`;
    document.getElementById("d-sum").textContent = "Sum: " + dSecondCard;
    start.classList.add("inactive");
    add.classList.remove("inactive");
    hold.classList.remove("inactive");
  } else if (sum === 21) {
    message = "Wohoo ! You've got blackJack. You Won !!!";
    dImg.innerHTML = `<img src="${image[dFirstCard]}">
          <img src="${image[dSecondCard]}">`;
    document.getElementById("d-sum").textContent = "Sum: " + dSum;
    blackJack = true;
    start.classList.remove("inactive");
    add.classList.add("inactive");
    hold.classList.add("inactive");
  } else {
    message = "You are out of the game! Dealer Won !!!";
    dImg.innerHTML = `<img src="${image[dFirstCard]}">
          <img src="${image[dSecondCard]}">`;
    document.getElementById("d-sum").textContent = "Sum: " + dSum;
    isAlive = false;
    start.classList.remove("inactive");
    add.classList.add("inactive");
    hold.classList.add("inactive");
  }
  document.getElementById("message-el").textContent = message;
}

function holdCard() {
  dImg.innerHTML = `<img src="${image[dFirstCard]}">
      <img src="${image[dSecondCard]}">`;
  document.getElementById("d-sum").textContent = "Sum: " + dSum;
  while (sum >= dSum) {
    let thirdCard = randomNum(1, 11);
    dSum += thirdCard;
    dImg.innerHTML += `<img src="${image[thirdCard]}">`;
    document.getElementById("d-sum").textContent = "Sum: " + dSum;
  }
  if (sum > dSum || dSum > 21) {
    message = "You Win !!";
  } else if (sum == dSum) {
    message = "It's a Push !!";
  } else {
    message = "Dealer Wins !!";
  }
  start.classList.remove("inactive");
  add.classList.add("inactive");
  hold.classList.add("inactive");
  mess.textContent = message;
  console.log(sum);
  console.log(dSum);
}
