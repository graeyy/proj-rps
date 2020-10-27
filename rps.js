let i = 0;

var pWin = 0;
var cpuWin = 0;
var cntDraw = 0;
function playRound(playerSelection, computerSelection) {

    // * makes input case-insensitive
    playerSelection = playerSelection.toLowerCase();
    var res;
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        res = "You win. " + capitalize(playerSelection) + " beats " + capitalize(computerSelection)
        //res = "you win"
    } else if (playerSelection == computerSelection) {
        res = "The match resulted in a draw. Both players chose " + capitalize(playerSelection)
        //res = "draw"
    } else {
        res = "You lose. " + capitalize(computerSelection) + " beats " + capitalize(playerSelection)
        //res = "you lose"
    }

    getResult(res);
    return res
}

/**
 * * for cpu's random move
 */
function computerPlay() {
    let moves = ["rock", "paper", "scissors"]
    var randIndex = Math.floor(Math.random() * 3)

    return moves[randIndex]
}

function capitalize(str) {
    return (str[0].toUpperCase() + str.slice(1).toLowerCase())
}


const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

const buttons = document.getElementById('btns').querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.innerHTML;
        let computerSelection = computerPlay();
        actionInfo(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
    })
})

const resContainer = document.querySelector('#result');

function actionInfo(playerSelection, computerSelection) {
    let msg = "You played " + playerSelection + ". CPU played " + capitalize(computerSelection); 
    const info = document.createElement('h3');
    info.textContent = msg;
    resContainer.appendChild(info);

}

function getResult(res) {
    const result = document.createElement('p');
    result.classList.add('content');
    result.textContent = res;
    resContainer.appendChild(result);

    getScore(res);

}

function getScore(res) {
    i++;
    if (res.includes("win")) {
        pWin += 1;
    } else if (res.includes("draw")) {
        cntDraw += 1;
    } else  {
        cpuWin += 1;
    }

    var score = "Round: " + i + " Player: " + pWin + " CPU: " + cpuWin + " Draw: " + cntDraw;

    const scoreboard = document.createElement('p');
    scoreboard.classList.add('content');
    scoreboard.textContent = score;
    resContainer.appendChild(scoreboard);
}