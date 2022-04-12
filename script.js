// The computer choose randomly between rock, paper or scissors
function computerPlay() {
  const randomRockPaperScissors = Math.floor(Math.random() * 3 );
    if (randomRockPaperScissors === 0 ) {
      return "rock";
    } else if (randomRockPaperScissors === 1) {
      return "paper";
    } else if (randomRockPaperScissors === 2 ) {
      return "scissors";
    }
}
//const computerSelection = computerPlay();
// console.log(computerSelection);



function playRound(playerSelection, computerSelection) {
  // player wins if
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "player wins, rock beats scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "player wins, scissors beats paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "player wins, papers beats rock";
  } 
  // player looses if
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "player looses, rock beats scissors";
  }   else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "player looses, scissors beats paper";
  }   else if (playerSelection == "rock" && computerSelection == "paper") {
    return "player looses, paper beats rock";
  } 
  // player & computer equal if
  else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "scissors vs scissors, nobody wins, play another round";
  }   else if (playerSelection == "paper" && computerSelection == "paper") {
    return "paper vs paper, nobody wins, play another round";
  }   else if (playerSelection == "rock" && computerSelection == "rock") {
    return "rock vs rock, nobody wins, play another round";
  }  
}
const playerSelection = prompt("Choose between rock, paper and scissors");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


function game () {
  for (let i = 0; i < 5; i++) {
    //code
 }
}