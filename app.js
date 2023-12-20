const computerDisplay = document.getElementById("computer-choice");
const userDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice = "";
let computerChoice = "";
let result = "";

possibleChoices.forEach((ch) =>
  ch.addEventListener("click", (e) => {
    userChoice = e.currentTarget.id;
    userDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  // const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;
  const randomNum = Math.floor(
    Math.random() * (possibleChoices.length - 1) + 1
  );
  if (randomNum === 1) {
    computerChoice = "rock";
  }
  if (randomNum === 2) {
    computerChoice = "scissors";
  }
  if (randomNum === 1) {
    computerChoice = "paper";
  }
  computerDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = `it's a draw!!`;
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = `*** You Win ***`;
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = `--- You Lose ---`;
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = `*** You Win ***`;
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = `--- You Lose ---`;
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = `*** You Win ***`;
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = `--- You Lose ---`;
  }
  resultDisplay.innerHTML = result;
}
