function computerPlay() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    return `Rock`;
  } else if (choice === 2) {
    return `Paper`;
  }
  return `Scissors`;
}

function playRound(playerSelection, computerSelection) {
  let playerSelection1 = playerSelection.toLowerCase();
  let computerSelection1 = computerSelection.toLowerCase();
  if (playerSelection1 === computerSelection1) {
    return `tie`;
  }
  if (playerSelection1 === `rock` && computerSelection1 === `scissors`) {
    return `win`;
  }
  if (playerSelection1 === `scissors` && computerSelection1 === `paper`) {
    return `win`;
  }
  if (playerSelection1 === `paper` && computerSelection1 === `rock`) {
    return `win`;
  }
  return `loss`;
}

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.className = "button";
rock.setAttribute("id", "rock");
document.body.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.className = "button";
paper.setAttribute("id", "paper");
document.body.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.className = "button";
scissors.setAttribute("id", "scissors");
document.body.appendChild(scissors);

const buttons = document.querySelectorAll(".button");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
