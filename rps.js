let i = 0;

var pWin = 0;
var cpuWin = 0;
var cntDraw = 0;
var reset = false;
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
        //actionInfo(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        /**
         * * pressing ok on reset alert somehow counts as button click (??)
         * TODO: fix picture reset without reset boolean
         */
        if (!reset) {
            setImg(playerSelection, computerSelection);
        } else {
            reset = false;
        }
        console.log("button click");
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
    result.textContent = (i+1) + ': ' + res;
    resContainer.appendChild(result);

    resContainer.scrollTop = resContainer.scrollHeight;

    getScore(res);
    checkForWin(pWin, cpuWin);

}

const scrBoard = document.querySelector('#scrBoard');


function getScore(res) {
    i++;
    if (res.includes("win")) {
        pWin += 1;
    } else if (res.includes("draw")) {
        cntDraw += 1;
    } else  {
        cpuWin += 1;
    }

    setRoundDetails(i, pWin, cpuWin, cntDraw);
}

var usr = document.getElementById('pImg');
var cpu = document.getElementById('oppImg');

function setImg(playerImg, cpuImg){
    var user = playerImg.toLowerCase();
    usr.src = 'img/' + user + '.png';
    //usr.height = '300';
    //usr.width = '300';

    cpu.src = 'img/' + cpuImg + '.png';
    //cpu.height = '300';
    //cpu.width = '300';
    
    console.log(playerImg, cpuImg);

}

function checkForWin(userWin, oppWin) {
    var msg = '';
    var winnerExists = true;
    if (userWin == 5) {
        msg = 'User has won!';
    } else if (oppWin == 5) {
        msg = 'Computer has won!';
    } else {
        winnerExists = false;
    }

    if (winnerExists) {
        window.alert(msg + ' Results will now reset.');
        i = 0;
        pWin = 0;
        cpuWin = 0;
        cntDraw = 0;
        setRoundDetails(i, pWin, cpuWin, cntDraw);
        reset = true;   
        setImg("user", "cpu");

        console.log("reset");

        var foo = document.getElementById('result');
        while (foo.lastChild.id != 'resultLbl') foo.removeChild(foo.lastChild);
    }

}

function setRoundDetails(round, userWin, oppWin, draw) {
    // TODO: fix variables and arguments(some are repetitive + redundant)
    var roundNum = document.getElementById('round');
    var scores = document.getElementById('scores');
    var draws = document.getElementById('drawCnt');

    var score = userWin + ' - ' + oppWin;

    roundNum.innerHTML = 'Round ' + round;
    scores.innerHTML = score;
    draws.innerHTML = 'Draws: ' + draw;


}