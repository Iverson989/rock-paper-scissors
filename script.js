// begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

function computerPlay(){
  // set choice variable to a random integer 1-3
  let choice = Math.floor(Math.random() * 3) + 1;
  // rock = 1; paper = 2; scissors = 3;
  // if choice === 1
  if (choice === 1){
    // return `rock`
    return `Rock`;
  // else if choice === 2
  } else if (choice === 2){
    // return `paper`
    return `Paper`;
  }
  // if choice is neither 1 or 2
  // return `scissors`
  return `Scissors`;
}

// the function should take two parameters - the playerSelection and computerSelection 
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)

function playRound(playerSelection, computerSelection) {
  // convert both params to lowercase
  let playerSelection1 = playerSelection.toLowerCase()
  let computerSelection1 = computerSelection.toLowerCase()
  // if a tie
  if (playerSelection1 === computerSelection1){
    return `tie`
  }
  // if playerSelection = and computerSelection = 
  if (playerSelection1 === `rock` && computerSelection1 === `scissors`) {
    // return `win`;
    return `win`;
  }
  if (playerSelection1 === `scissors` && computerSelection1 === `paper`) {
    return `win`;
  }
  if (playerSelection1 === `paper` && computerSelection1 === `rock`) {
    return `win`;
  }
  // return `loss`
  return `loss`;
}

// Write a function called game(). Use the previous function inside of this one to 
// play a 5 round game that keeps score and reports a winner or loser at the end.
// should use console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.

function game() {
  // create result object with win and loss counters
  var result = {
    win: 0,
    loss: 0,
    tie: 0,
  };
  // log results of playRound to console at the end of each of the 5 iterations using a for loop,
  // use a new window.prompt for playerSelection each time
  for (var game = 0; game < 5; game++){
    let p1 = prompt(`What will you choose?`)
    let roundResult = playRound(p1, computerPlay());
    let tieMessage = `It's a Tie!`
    let winMessage = `You Win!`
    let lossMessage = `You Lose!`
    // use if to increment result counter
    if (roundResult === `win`) {
      console.log(winMessage)
      result.win++;
    } else if (roundResult === `loss`) {
      console.log(lossMessage)
      result.loss += 1;
    } else if (roundResult === `tie`) {
      console.log(tieMessage)
      result.tie = result.tie + 1;
    }
  }
  // log results of game into a message declaring a winner
  if (result.win > result.loss){
    console.log(`YOU'RE A WINNER!!!\n${JSON.stringify(result)}`);
  } else if (result.win < result.loss) {
    console.log(`YOU JUST LOST THE GAME!\n${JSON.stringify(result)}`);
  } else {
    console.log(`IT WAS A TIE, PLAY AGAIN TO SETTLE THIS!!!\n${JSON.stringify(result)}`);
  }
  return;
}