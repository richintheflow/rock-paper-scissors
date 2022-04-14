let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection) { 
  // player wins if
  if (playerSelection == "rock" && computerSelection == "scissors") {
    ++playerScore;
    return "player wins, rock beats scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    ++playerScore;
    return "player wins, scissors beats paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    ++playerScore;
    return "player wins, papers beats rock";
  } 
  // player looses if
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    ++computerScore;
    return "player looses, rock beats scissors";
  }   else if (playerSelection == "paper" && computerSelection == "scissors") {
    ++computerScore;
    return "player looses, scissors beats paper";
  }   else if (playerSelection == "rock" && computerSelection == "paper") {
    ++computerScore;
    return "player looses, paper beats rock";
  } 
  // player & computer equal if
  else if (playerSelection == computerSelection) {
    return "nobody wins, play another round";
  }   
  // if write error in the prompt input
  else if (playerSelection !== "paper", "scissors", "rock") {
    return 'write correctly "rock", "paper" or "scissors" ';
  }
}

// The game has 5 rounds
// the player choose between rock, paper and scissors
// the result appears
// the game stops at the 5th round
function game () {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    let playerSelectionUpOrLowerCase = prompt("Choose and write rock, paper or scissors");
    let playerSelection = playerSelectionUpOrLowerCase.toLocaleLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    console.log("PLAYER  " + playerScore + " - " + computerScore + "  COMPUTER");
    // if (playRound(playerSelection, computerSelection) === "player wins, rock beats scissors") {
    //   ++playerScore;
    // }
 }
  if (playerScore < computerScore) {
    console.log("COMPUTER WINS")
  }
  else if (playerScore > computerScore) {
    console.log("PLAYER WINS")
  }
  else if (playerScore == computerScore) {
    console.log("NO WINNER")
  }
}

game();
