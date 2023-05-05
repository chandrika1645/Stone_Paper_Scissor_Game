

let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, lose: 0, ties: 0 };

function playerMove(playerMove) {
    const computerMove = pickComputerMoves();
    if (playerMove === "Scissors") {
        if (computerMove === 'Rock') {
            result = 'You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You won.';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
    }



    if (playerMove === "Rock") {
        if (computerMove === 'Rock') {
            result = 'Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else if (computerMove === 'Scissors') {
            result = 'You won.';
        }
    }

    if (playerMove === "Paper") {
        if (computerMove === 'Rock') {
            result = 'You won.';
        } else if (computerMove === 'Paper') {
            result = 'Tie.';
        } else if (computerMove === 'Scissors') {
            result = 'You lose.';
        }
    }

    if (result === 'You won.') {
        score.wins++;
    } else if (result === 'You lose.') {
        score.lose++;
    } else if (result === 'Tie.') {
        score.ties++;
    }
    document.querySelector('.game-result').innerHTML = result;
    document.querySelector('.players-moves').innerHTML = `You:
        <img class="move-icon" src="/Rock Paper Scissor Game/images/${playerMove}-emoji.png" alt="">
        <img class="move-icon" src="/Rock Paper Scissor Game/images/${computerMove}-emoji.png" alt="">
        :Computer`;

    localStorage.setItem('score', JSON.stringify(score));
    printScore();

}

function pickComputerMoves() {
    let computerMove = '';
    const randomNumber = Math.random();
    let result = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
}
function printScore() {
    document.querySelector('.score-board').innerHTML = `Wins: ${score.wins}. lose: ${score.lose}. Ties: ${score.ties}`;

}

let isAutiplaying = false;
let intervalId;
function autoPlay(){
    if(isAutiplaying===false){
        intervalId = setInterval(function(){
            const Move = pickComputerMoves();
            playerMove(Move);
            
        },1000);
        isAutiplaying = true;
    }else{
        clearInterval(intervalId);
        isAutiplaying = false;

    }
}