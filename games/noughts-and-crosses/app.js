const playerOneScoreTextElement = document.querySelector('[data-p1-score]')
const playerTwoScoreTextElement = document.querySelector('[data-p2-score]')
const playerGrid = document.querySelectorAll('[data-grid]')
const newGameButton = document.querySelector('[data-new-game]')
const resetButton = document.querySelector('[data-reset]')
const gameDrawn = document.getElementById('draw')
const playerOne = document.querySelector('[data-player-one]')
const playerTwo = document.querySelector('[data-player-two]')


const topLeft = document.querySelector('[data-top-left]')
const topMiddle = document.querySelector('[data-top-middle]')
const topRight = document.querySelector('[data-top-right]')

const left = document.querySelector('[data-left]')
const middle = document.querySelector('[data-middle]')
const right = document.querySelector('[data-right]')

const bottomLeft = document.querySelector('[data-bottom-left]')
const bottomMiddle = document.querySelector('[data-bottom-middle]')
const bottomRight = document.querySelector('[data-bottom-right]')


class NoughtsAndCrosses {
    constructor(playerOneScoreTextElement, playerTwoScoreTextElement) {
        this.playerOneScoreTextElement = playerOneScoreTextElement
        this.playerTwoScoreTextElement = playerTwoScoreTextElement
        this.noughtOrCross = 'X'
        this.isGameDrawn = false
        this.isPlayerOne = true
        this.currentPlayer()
    }

    reset() {
        playerOneScoreTextElement.innerText = 0
        playerTwoScoreTextElement.innerText = 0
    }

    newGame() {
        playerGrid.forEach(square => {
            square.innerText = ''
        })
    }

    currentPlayer() {
        if (this.isPlayerOne === true) {
            playerOne.style.color = 'red'
            playerOne.style.textDecoration = 'underline'
            playerTwo.style.color = 'black'
            playerTwo.style.textDecoration = 'none'
        } else {
            playerOne.style.color = 'black'
            playerOne.style.textDecoration = 'none'
            playerTwo.style.color = 'red'
            playerTwo.style.textDecoration = 'underline'
        }
    }


    gameDrawn() {
        if (this.isGameDrawn === true) {
            gameDrawn.style.display = block;
            this.isGameDrawn = false;
        }
    }

    victoryCheck() {
    }
}

const noughtsAndCrosses = new NoughtsAndCrosses(playerOneScoreTextElement, playerTwoScoreTextElement)

playerGrid.forEach(square => {
    square.addEventListener('click', () => {
        noughtsAndCrosses.gameDrawn()
    })
})

newGameButton.addEventListener('click', () => {
    noughtsAndCrosses.newGame()
})

resetButton.addEventListener('click', () => {
    noughtsAndCrosses.newGame()
    noughtsAndCrosses.reset()
})