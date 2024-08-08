let gameState = false
let indexPeriod = 0
const periods = ["1hf", "2hf", "3hf", "4hf"]

function startGame () {
    if (gameState == false) {
        gameState = true
        text = periods[indexPeriod]
        document.getElementById("game-period").innerText = text
    } else {
        return
    }
}

function nextPeriod () {
    indexPeriod += 1
    if (indexPeriod > 3) {
        document.getElementById("game-period").innerText = "Final"
        return
    } else {
        document.getElementById("game-period").innerText = periods[indexPeriod]
    }
}

function newGame () {
    document.getElementById("home-score").innerText = "0"
    document.getElementById("guest-score").innerText = "0"
    document.getElementById("game-period").innerText = "Game"
}

function add (score, team) {
    if (gameState == true) {
        x = parseInt(document.getElementById(team).innerText)
        x += score
        document.getElementById(team).innerText = x
    } else {
        console.log("Start the game")
    }
}