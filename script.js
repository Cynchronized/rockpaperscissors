function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let computerPlay = "rock";

    if (computerChoice == 1) {
        computerPlay = "rock";
    } else if (computerChoice == 2) {
        computerPlay = "scissors"
    } else {
        computerPlay = "paper"
    }
    return computerPlay;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const playerWin = "You win! " + playerSelection + " beats " + computerSelection;
    const playerLose = "You lose! " + playerSelection + " loses to " + computerSelection;
    const tie = "You tie! " + playerSelection + " ties with " + computerSelection;
    let victory = 1;

    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || 
        playerSelection == "paper" && computerSelection == "rock") {
        console.log(playerWin);
        return victory = 1;
    } else if (playerSelection == computerSelection) {
        console.log(tie);
        return victory = 2;
    } else {
        console.log(playerLose);
        return victory = 3;
    }
}


function game() {
    let compScore = 0;
    let playScore = 0;
    let round;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();
        round = playRound(playerSelection, computerSelection);

        if (round == 1) {
            playScore++;
        }else if (round == 3) {
            compScore++;
        }
        console.log("Player Score: " + playScore + " Computer Score: " + compScore);
    }
}

game();