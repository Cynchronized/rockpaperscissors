const selectionButtons = document.querySelectorAll('[data-selection]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const playerScoreSpan = document.querySelector('[data-player-score]')

function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let computerPlay = "rock"

    if (computerChoice == 1) {
        computerPlay = "rock"
    } else if (computerChoice == 2) {
        computerPlay = "scissors"
    } else {
        computerPlay = "paper"
    }
    return computerPlay;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    const playerWin = "You win! " + playerSelection + " beats " + computerSelection
    const playerLose = "You lose! " + playerSelection + " loses to " + computerSelection
    const tie = "You tie! " + playerSelection + " ties with " + computerSelection
    let outcome = 1;

    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || 
        playerSelection == "paper" && computerSelection == "rock") {
        console.log(playerWin)
        return outcome = 1
    } else if (playerSelection == computerSelection) {
        console.log(tie)
        return outcome = 2
    } else {
        console.log(playerLose)
        return outcome = 3
    }
}

function updateScore (scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function resetScore (computerScoreSpan, playerScoreSpan) {
    alert ("Game over! Try again")
    computerScoreSpan.innerText = 0
    playerScoreSpan.innerText = 0
}


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const score = playRound(selectionName, getComputerChoice())

        if (score === 1) {
            updateScore (playerScoreSpan)
            alert("You Win!")
        }else if (score === 3) {
            updateScore (computerScoreSpan)
            alert("You lost!")
        }

        if (parseInt(computerScoreSpan.innerText) === 5|| parseInt(playerScoreSpan.innerText) === 5) {
            resetScore(computerScoreSpan, playerScoreSpan)
        }


    })
})

