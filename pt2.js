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

function game() {
  var result = {
    win: 0,
    loss: 0,
    tie: 0,
  };
  for (var game = 0; game < 5; game++) {
    let p1 = prompt(`What will you choose?`);
    let roundResult = playRound(p1, computerPlay());
    let tieMessage = `It's a Tie!`;
    let winMessage = `You Win!`;
    let lossMessage = `You Lose!`;
    if (roundResult === `win`) {
      console.log(winMessage);
      result.win++;
    } else if (roundResult === `loss`) {
      console.log(lossMessage);
      result.loss += 1;
    } else if (roundResult === `tie`) {
      console.log(tieMessage);
      result.tie = result.tie + 1;
    }
  }
  if (result.win > result.loss) {
    console.log(`YOU'RE A WINNER!!!\n${JSON.stringify(result)}`);
  } else if (result.win < result.loss) {
    console.log(`YOU JUST LOST THE GAME!\n${JSON.stringify(result)}`);
  } else {
    console.log(
      `IT WAS A TIE, PLAY AGAIN TO SETTLE THIS!!!\n${JSON.stringify(result)}`
    );
  }
  return `TO PLAY AGAIN: select console, then press UP ARROW and press ENTER`;
}
