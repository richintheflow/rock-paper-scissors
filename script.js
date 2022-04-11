function computerPlay() {
  let randomRockPaperScissors = Math.floor(Math.random() * 3 );
    if (randomRockPaperScissors === 0 ) {
      console.log("rock");
    } else if (randomRockPaperScissors === 1) {
      console.log("paper");
    } else if (randomRockPaperScissors === 2 ) {
      console.log("scissors");
    }
}

computerPlay()