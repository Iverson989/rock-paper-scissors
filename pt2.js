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
