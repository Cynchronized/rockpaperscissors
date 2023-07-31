const selectionButtons = document.querySelectorAll('[data-selection]')
const result = document.querySelector(".outcome")
const modalMessage = document.querySelector("#game-over-message")
const choices = ["rock", "paper", "scissors"]
const computerScore = document.querySelector('[data-computer-score]')
const playerScore = document.querySelector('[data-player-score]')
const computerImage = document.querySelector('[data-computer-image')
const playerImage = document.querySelector('[data-player-image]')
const modal = document.querySelector('#game-over')
const restartbtn = document.querySelector('#restart-button')
let roundWinner = ''

// Event Listeners
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const playerSelection = selectionButton.dataset.selection
        let computerSelection = randomSelection()
        let outcome = playRound(playerSelection, computerSelection)
        updateImages(playerSelection, computerSelection)
        updateScore(outcome)
    })
})

restartbtn.addEventListener('click', restartGame)






// Functions

function restartGame() {
    playerImage.textContent = '🧠'
    computerImage.textContent = '🤖'
    playerScore.textContent = '0'
    computerScore.textContent = '0'
    result.innerText = 'First to 5 wins!'
    result.style.color = '#457B9D'
    modal.close()

}

function gameOver(playerScore, computerScore) {
    if (playerScore.innerText == 5) {
        modalMessage.innerText = "You won! Please try again"
    }else if (computerScore.innerText == 5) {
        modalMessage.innerText = "You lost! Try again?"
    }

    modal.showModal()
}

function updateImages (playerSelection, computerSelection) {
    // change image of player side
    switch (playerSelection) {
        case 'rock':
            playerImage.textContent = '🗿'
            break
        case 'paper':
            playerImage.textContent = '📄'
            break
        case 'scissors':
            playerImage.textContent = '✂'
            break
    }
    // change image of computer side
    switch (computerSelection) {
        case 'ROCK':
            computerImage.textContent = '🗿'
            break
        case 'PAPER':
            computerImage.textContent = '📄'
            break
        case 'SCISSORS':
            computerImage.textContent = '✂'
            break
    }
}

function randomSelection () {
    const randomChoice = Math.floor(Math.random() * choices.length)
    switch (randomChoice) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        return roundWinner = 'tie'
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection == 'scissors' && computerSelection === 'paper') ||
        (playerSelection == 'paper' && computerSelection === 'rock')
       ) {
        return roundWinner = 'player'
       } else {
        return roundWinner = 'computer'
       }
}

function incrementScore(score) {
    score.innerText = parseInt(score.innerText) + 1
}

function updateScore (outcome) {
    if (outcome === 'player') {
        result.innerText = 'You won!'
        result.style.color = 'green'
        incrementScore(playerScore)
    } else if (outcome === 'computer') {
        result.innerText = 'You lost...'
        result.style.color = 'red'
        incrementScore(computerScore)
    } else {
        result.innerText = 'It was a tie'
        result.style.color = 'yellow'
    }

    if (playerScore.innerText == 5 || computerScore.innerText == 5) {
        gameOver(playerScore, computerScore)
    }


}

