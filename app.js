const computerDisplay = document.getElementById("computer-choice");
const userDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
// let userChoice

possibleChoices.forEach((ch) =>
  ch.addEventListener("click", (e) => {
    userChoice = e.currentTarget.id;
    userDisplay.innerHTML = userChoice;
    generateComputerChoice();
  })
);

function generateComputerChoice() {
  const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;
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
