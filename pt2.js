document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.flexWrap = "wrap";
document.body.style.marginTop = "5vh";

const header1 = document.createElement("h1");
header1.setAttribute("id", "h1");
document.body.appendChild(header1);
const h1 = document.querySelector("#h1");
h1.textContent = `Welcome to The RPS Arena!`;
h1.style.color = "red";
h1.style.fontSize = "48px";
h1.style.textAlign = "center";

let playerScore = 0;
let compScore = 0;
const scoreDiv = document.createElement("div");
scoreDiv.setAttribute("id", "scoreElement");
document.body.appendChild(scoreDiv);
const points = document.querySelector("#scoreElement");
points.textContent = `${playerScore} vs ${compScore}`;
points.style.alignSelf = "center";
points.style.fontSize = "26px";
points.style.fontWeight = "bold";
points.style.color = "red";

const div = document.createElement("div");
div.setAttribute("id", "score");
document.body.appendChild(div);
const scoreCard = document.querySelector("#score");
scoreCard.style.display = "flex";
scoreCard.style.justifyContent = "center";
scoreCard.style.backgroundColor = "black";
scoreCard.style.color = "mistyrose";
scoreCard.style.justifyContent = "center";

const ol = document.createElement("ol");
ol.setAttribute("id", "resultList");
document.getElementById("score").appendChild(ol);
const results = document.querySelector("#resultList");

const bDiv = document.createElement("div");
bDiv.setAttribute("id", "bDiv");
document.body.appendChild(bDiv);
const buttonDiv = document.querySelector("#bDiv");
buttonDiv.style.width = "439px";
buttonDiv.style.display = "flex";
buttonDiv.style.justifyContent = "space-around";
buttonDiv.style.position = "absolute";
buttonDiv.style.bottom = "5vh";

const rock = document.createElement("BUTTON");
rock.textContent = "Rock";
rock.className = "button";
rock.setAttribute("id", "rock");
document.getElementById("bDiv").appendChild(rock);
const rockButton = document.getElementById("rock");
rockButton.style.margin = "10px";
rockButton.style.color = "red";

const paper = document.createElement("BUTTON");
paper.textContent = "Paper";
paper.className = "button";
paper.setAttribute("id", "paper");
document.getElementById("bDiv").appendChild(paper);
const paperButton = document.getElementById("paper");
paperButton.style.margin = "10px";
paperButton.style.color = "white";

const scissors = document.createElement("BUTTON");
scissors.textContent = "Scissors";
scissors.className = "button";
scissors.setAttribute("id", "scissors");
document.getElementById("bDiv").appendChild(scissors);
const scissorsButton = document.getElementById("scissors");
scissorsButton.style.margin = "10px";
scissorsButton.style.color = "dodgerblue";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent, computerPlay());
  });
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

const winMsg =
  "The Challenger has WON? This isn't how it's supposed to happen!";
const lossMsg = "But of course, the Champion is expected to win!!!";
const tieMsg =
  "The Champion's strategy to read your mind forced another Round!";

function playRound(playerSelection, computerSelection) {
  const li = document.createElement("li");
  let playerSelection1 = playerSelection.toLowerCase();
  let computerSelection1 = computerSelection.toLowerCase();
  if (playerSelection1 === computerSelection1) {
    li.textContent = `${tieMsg}`;
    results.appendChild(li);
    return;
  }
  if (playerSelection1 === "rock" && computerSelection1 === "scissors") {
    li.textContent = `${winMsg}`;
    results.appendChild(li);
    playerScore++;
    points.textContent = `${playerScore} vs ${compScore}`;
    return;
  }
  if (playerSelection1 === "scissors" && computerSelection1 === "paper") {
    li.textContent = `${winMsg}`;
    results.appendChild(li);
    playerScore++;
    points.textContent = `${playerScore} vs ${compScore}`;
    return;
  }
  if (playerSelection1 === "paper" && computerSelection1 === "rock") {
    li.textContent = `${winMsg}`;
    results.appendChild(li);
    playerScore++;
    points.textContent = `${playerScore} vs ${compScore}`;
    return;
  }
  li.textContent = `${lossMsg}`;
  results.appendChild(li);
  compScore++;
  points.textContent = `${playerScore} vs ${compScore}`;
  return;
}
