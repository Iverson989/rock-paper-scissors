function computerPlay() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    return `Rock`;
  } else if (choice === 2) {
    return `Paper`;
  }
  return `Scissors`;
}

let compChoice = computerPlay();

function playRound(playerSelection, computerSelection) {
  let playerSelection1 = playerSelection.toLowerCase();
  let computerSelection1 = computerSelection.toLowerCase();
  if (playerSelection1 === computerSelection1) {
    alert(`tie`);
  }
  if (playerSelection1 === `rock` && computerSelection1 === `scissors`) {
    alert(`win`);
  }
  if (playerSelection1 === `scissors` && computerSelection1 === `paper`) {
    alert(`win`);
  }
  if (playerSelection1 === `paper` && computerSelection1 === `rock`) {
    alert(`win`);
  }
  alert(`loss`);
  return;
}

const rock = document.createElement("BUTTON");
rock.textContent = "Rock";
rock.className = "button";
rock.setAttribute("id", "rock");
document.body.appendChild(rock);

const paper = document.createElement("BUTTON");
paper.textContent = "Paper";
paper.className = "button";
paper.setAttribute("id", "paper");
document.body.appendChild(paper);

const scissors = document.createElement("BUTTON");
scissors.textContent = "Scissors";
scissors.className = "button";
scissors.setAttribute("id", "scissors");
document.body.appendChild(scissors);

const buttons = document.querySelectorAll(".button");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("mousedown", () => {
  playRound(rockButton.textContent, compChoice);
});

paperButton.addEventListener("mousedown", () => {
  playRound(paperButton.textContent, compChoice);
});

scissorsButton.addEventListener("mousedown", () => {
  playRound(scissorsButton.textContent, compChoice);
});
