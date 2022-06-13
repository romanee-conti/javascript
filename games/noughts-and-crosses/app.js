const noughts = document.querySelector('[data-player-one]')
const crosses = document.querySelector('[data-player-two]')
let noughtScore = document.querySelector('[data-p1-score]')
let crossScore = document.querySelector('[data-p2-score]')
const gridSquares = document.querySelectorAll('.grid-square')
const newGameButton = document.querySelector('[data-new-game]')
const resetButton = document.querySelector('[data-reset]')
const winningMessage = document.getElementById('winning-message')

let isNoughts

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function startGame() {
    gridSquares.forEach(square => {
        square.addEventListener('click', handleClick, { once: true })
    })
    turnIndicator()
}

function reset() {
    noughtScore.innerText = 0
    crossScore.innerText = 0
    newGame()
}

function newGame() {
    gridSquares.forEach(square => {
        square.innerText = ''
        square.removeEventListener('click', handleClick)
        square.classList.remove('filled')
        winningMessage.style.display = 'none'
    })
    startGame()
}

function handleClick(e) {
    const currentSquare = e.target
    const currentTurn = isNoughts ? 'O' : 'X'
    currentSquare.innerText = currentTurn
    currentSquare.classList.add('filled')
    if (checkWin(currentTurn)) {
        gameEnd(false)
    } else if (isDraw()) {
        gameEnd(true)
    } else {
        turnIndicator()
    }
}

function turnIndicator() {
    isNoughts = !isNoughts
    if (isNoughts === true) {
        noughts.classList.add('active')
        crosses.classList.remove('active')
    } else {
        crosses.classList.add('active')
        noughts.classList.remove('active')
    }
}

function increaseScore() {
    if (isNoughts === true) {
        noughtScore.innerText++
    } else crossScore.innerText++
}

function checkWin(currentTurn) {
    return winningCombos.some(combination => {
        return combination.every(index => {
            if (gridSquares[index].innerText === currentTurn) return true
        })
    })
}

function isDraw() {
    return [...gridSquares].every(square => {
        return square.innerText === 'X' || square.innerText === 'O'
    })
}

function gameEnd(draw) {
    if (draw) {
        winningMessage.innerText = `Draw!`
    } else {
        const winningSide = isNoughts ? 'Noughts' : 'Crosses'
        winningMessage.innerText = `${winningSide} win!`
        gridSquares.forEach(square => {
            square.classList.add('filled')
            square.removeEventListener('click', handleClick)
        })
        increaseScore()
    }
    winningMessage.style.display = 'block'
}

newGameButton.addEventListener('click', newGame)

resetButton.addEventListener('click', reset)

startGame()