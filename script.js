// begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
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