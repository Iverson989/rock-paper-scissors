document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.flexWrap = "wrap";
document.body.style.width = "440px";
document.body.style.marginTop = "10vh";

const header1 = document.createElement("h1");
header1.setAttribute("id", "h1");
document.body.appendChild(header1);
const h1 = document.querySelector("#h1");
h1.textContent = "Rock, Paper, Scissors";
h1.style.color = "red";
h1.style.fontSize = "48px";

const div = document.createElement("div");
div.setAttribute("id", "score");
document.body.appendChild(div);
const scoreCard = document.querySelector("#score");
scoreCard.textContent = `"Play 5 rounds to decide the Victor`;
scoreCard.style.backgroundColor = "black";
scoreCard.style.color = "mistyrose";

const form = document.createElement("form");
form.setAttribute("id", "form");
document.body.appendChild(form);

const rock = document.createElement("BUTTON");
rock.textContent = "Rock";
rock.className = "button";
rock.setAttribute("id", "rock");
document.getElementById("form").appendChild(rock);
const rockButton = document.getElementById("rock");
rockButton.style.margin = "10px";
rockButton.style.color = "red";
rockButton.addEventListener("click", () => {
  playRound(rockButton.textContent, computerPlay());
});

const paper = document.createElement("BUTTON");
paper.textContent = "Paper";
paper.className = "button";
paper.setAttribute("id", "paper");
document.getElementById("form").appendChild(paper);
const paperButton = document.getElementById("paper");
paperButton.style.margin = "10px";
paperButton.style.color = "white";
paperButton.addEventListener("click", () => {
  playRound(paperButton.textContent, computerPlay());
});

const scissors = document.createElement("BUTTON");
scissors.textContent = "Scissors";
scissors.className = "button";
scissors.setAttribute("id", "scissors");
document.getElementById("form").appendChild(scissors);
const scissorsButton = document.getElementById("scissors");
scissorsButton.style.margin = "10px";
scissorsButton.style.color = "dodgerblue";
scissorsButton.addEventListener("click", () => {
  playRound(scissorsButton.textContent, computerPlay());
});

function computerPlay() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    return "Rock";
  } else if (choice === 2) {
    return "Paper";
  }
  return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  let playerSelection1 = playerSelection.toLowerCase();
  let computerSelection1 = computerSelection.toLowerCase();
  if (playerSelection1 === computerSelection1) {
    console.log("tie");
    return;
  }
  if (playerSelection1 === "rock" && computerSelection1 === "scissors") {
    console.log("win");
    return;
  }
  if (playerSelection1 === "scissors" && computerSelection1 === "paper") {
    console.log("win");
    return;
  }
  if (playerSelection1 === "paper" && computerSelection1 === "rock") {
    console.log("win");
    return;
  }
  console.log("loss");
  return;
}
