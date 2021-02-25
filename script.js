// begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
  // set choice variable to a random integer 1-3
  let choice = Math.floor(Math.random() * 3) + 1;
  // rock = 1; paper = 2; scissors = 3;
  // if choice === 1
  if (choice === 1){
    // return `rock`
    return `rock`;
  // else if choice === 2
  } else if (choice === 2){
    // return `paper`
    return `paper`;
  }
  // if choice is neither 1 or 2
  // return `scissors`
  return `scissors`;
}

// the function should take two parameters - the playerSelection and computerSelection 
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)
function playRound(playerSelection, computerSelection) {
  // convert both params to lowercase
  let playerSelection1 = playerSelection.toLowerCase()
  let computerSelection1 = computerSelection.toLowerCase()
  // if playerSelection = and computerSelection = 
  if (playerSelection1 === `rock` && computerSelection1 === `scissors`) {
    // return `win`
    return `win`
  }
  // if playerSelection = and computerSelection =
  if (playerSelection1 === `scissors` && computerSelection1 === `paper`) {
    // return `win`
    return `win`
  }
  // if playerSelection = and computerSelection =
  if (playerSelection1 === `paper` && computerSelection1 === `rock`) {
    // return `win`
    return `win`
  }
  // return `lose`
  return `lose`
}

// 