function playRound(playerSelection, computerSelection) {

    // * makes input case-insensitive
    playerSelection = playerSelection.toLowerCase();

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


function game() {

    /**
     * * scoreboard variables
     */
    var pWin = 0;
    var cpuWin = 0;
    var cntDraw = 0;

    for (var i = 1; i <= 5; i++) {

        let playerSelection = prompt("Rock, Paper, Scissors?:")
        let computerSelection = computerPlay();

        var result = playRound(playerSelection, computerSelection)
        if (result.includes("win")) {
            pWin += 1
        } else if (result.includes("draw")) {
            cntDraw += 1
        } else  {
            cpuWin += 1
        }

        var scoreBoard = "Round: " + i + " Player: " + pWin + " CPU: " + cpuWin + " Draw: " + cntDraw

        console.log(result)
        console.log(scoreBoard)
    }
}

game()