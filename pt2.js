document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.flexWrap = "wrap";
document.body.style.width = "440px";
document.body.style.marginTop = "10vh";

const header1 = document.createElement("h1");
header1.setAttribute("id", "h1");
document.body.appendChild(header1);
const h1 = document.querySelector("#h1");
h1.textContent = `Welcome to The RPS Arena!`;
h1.style.color = "red";
h1.style.fontSize = "48px";
h1.style.textAlign = "center";

const div = document.createElement("div");
div.setAttribute("id", "score");
document.body.appendChild(div);
const scoreCard = document.querySelector("#score");
scoreCard.textContent = "results of rounds go here";
scoreCard.style.backgroundColor = "black";
scoreCard.style.color = "mistyrose";
scoreCard.style.justifyContent = "center";

const form = document.createElement("form");
form.setAttribute("id", "form");
document.body.appendChild(form);
const bForm = document.querySelector("#form");
bForm.style.width = "500px";
bForm.style.display = "flex";
bForm.style.justifyContent = "center";

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

let winMsg = "You've Won this Round!";
let lossMsg = "You Lost this Round!";
let tieMsg = "It's a Tie, no points awarded!";
function playRound(playerSelection, computerSelection) {
  let playerSelection1 = playerSelection.toLowerCase();
  let computerSelection1 = computerSelection.toLowerCase();
  if (playerSelection1 === computerSelection1) {
    resultArray.push(tieMsg);
    return;
  }
  if (playerSelection1 === "rock" && computerSelection1 === "scissors") {
    console.log(winMsg);
    return;
  }
  if (playerSelection1 === "scissors" && computerSelection1 === "paper") {
    console.log(winMsg);
    return;
  }
  if (playerSelection1 === "paper" && computerSelection1 === "rock") {
    console.log(winMsg);
    return;
  }
  console.log(lossMsg);

  return;
}
