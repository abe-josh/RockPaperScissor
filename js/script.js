var p1Score = 0, p2Score = 0;
var score = 0;
const winningScore = 5;

let start = document.querySelector('.startMessage');
let p1displayScore = document.querySelector('.p1Score');
let p2displayScore = document.querySelector('.p2Score');
let winnerMsg = document.querySelector('.winnerMsg');


let plyBtn = document.querySelector('.playBtn');

plyBtn.addEventListener('click', play);
//play();

// if(p1Score > p2Score){
//     alert("Player 1 Wins!");
// }
// else{
//     alert("Player 2 Wins!");
// }

// function play() {
//     while(score < winningScore ) {
//         let player1move = getMove(parseInt(prompt("What is your move? \nPress 1 for ROCK\n2 for PAPER\n3 for SCISSOR")));
//         console.log("Player 1 : " + player1move);

//         let player2move = getMove(Math.max(1, Math.floor(Math.random() * 4)));
//         console.log("Player 2 : " + player2move);

//         compareMove(player1move, player2move);
//         score = getHighScore(p1Score, p2Score);
//     }
// }

function getMove(randomNum) {
    // random number for player moves 
    // 1 == ROCK, 2 == PAPER, 3 == SCISSOR
    //let randomNum = Math.max(1, Math.floor(Math.random() * 4));
    if(randomNum === 1){
        return "ROCK";
    }
    else if(randomNum === 2){
        return "PAPER";
    }
    else if(randomNum === 3){
        return "SCISSOR";
    }
}

function compareMove(p1_move, p2_move, element){
    let p1moveContainer = element.getElementsByClassName("p1moveContainer");
    let p2moveContainer = element.getElementsByClassName("p2moveContainer");

    let winner = 0;

    if((p1_move === "ROCK" && p2_move === "SCISSOR") ||  (p1_move === "PAPER" && p2_move === "ROCK") || (p1_move === "SCISSOR" && p2_move === "PAPER")){
        console.log("Player 1 wins");
        console.log("test element details", p1moveContainer);

        winner = 1;

        highlight(p1moveContainer[0], p2moveContainer[0], winner);

        p1Score += 1;
        p1displayScore
    }
    else if((p2_move === "ROCK" && p1_move === "SCISSOR") ||  (p2_move === "PAPER" && p1_move === "ROCK") || (p2_move === "SCISSOR" && p1_move === "PAPER")){
        console.log("Player 2 wins");
        console.log("test element details", p2moveContainer);

        winner = 2;

        highlight(p1moveContainer[0], p2moveContainer[0], winner);

        p2Score += 1;
    }
    else {
        highlight(p2moveContainer[0], p1moveContainer[0], winner);
    }
}

function highlight(element1, element2, winner){
    const win = 'green';
    const lose = 'red';
    const draw = 'gray';

    console.log("element 1 typeof " , typeof element1);
    console.log("element 2 typeof " , typeof element2);

    console.log("element 1 attributes " , element1.className);
    console.log("element 2 attributes " , element2.className);

    switch(winner){
        case 1:
            element1.style.backgroundColor = win;
            element2.style.backgroundColor = lose;
            break;
        case 2:
            element1.style.backgroundColor = lose;
            element2.style.backgroundColor = win;
            break;
        default:
            element1.style.backgroundColor = draw;
            element2.style.backgroundColor = draw;
            break;
    }

    let event = new CustomEvent('highlight', {
        detail: {
            round_winner: element1.innerText,
            round_loser: element2.innerText,
        }
    });

    element1.dispatchEvent(event);
    element2.dispatchEvent(event);
}

function getHighScore(p1_score, p2_score){
    console.log("Player 1 score : " , p1_score);
    console.log("Player 2 score : " , p2_score);

    p1displayScore.textContent = p1_score;
    p2displayScore.textContent = p2_score;

    let highScore = (p1_score > p2_score) ? p1_score : (p2_score > p1_score) ? p2_score : p1_score;

    console.log("Highest score between two players : " , highScore);
    return highScore;
}


function play(){
    start.remove();
    const rpsBtn = document.querySelectorAll('.rps');
const gameContainer = document.querySelector('.gameContainer');
const playerMoveContainer = document.createElement('div');
playerMoveContainer.className = "playerMoves";

        for(let i = 0; i < rpsBtn.length; i++){
            console.log(i);
            rpsBtn[i].addEventListener('click', (event) => {
                if(rpsBtn[i] == event.target){
        
                    let playerMoveContainer = document.createElement('div');
                    playerMoveContainer.className = "playerMoves";
        
                    console.log(event);
        
                    let player1move = p1Move(playerMoveContainer, event.target);
                    vs(playerMoveContainer);
                    let player2move = p2Move(playerMoveContainer);
        
                    compareMove(player1move, player2move, playerMoveContainer);
                    ;
                    
                    let hr = document.createElement('hr');
                    
                    gameContainer.appendChild(playerMoveContainer);
                    gameContainer.appendChild(hr);

                    score = getHighScore(p1Score, p2Score)

                    if(score == winningScore){
                        if(p1Score > p2Score){
                            winnerMsg.textContent = "Player 1 Wins!";
                            alert("Player 1 Wins!");
                        }
                        else{
                            winnerMsg.textContent = "Player 2 Wins!";
                            alert("Player 2 Wins!");
                        }
                        window.location.reload(30000);
                        // location.reload();
                    }
                }
            });
        }
}

console.log(rpsBtn.length);
console.log(rpsBtn[2].innerText);


// function p1Move(element){
//     let p1_move = element.innerText;

//     let event = new CustomEvent('setMove', {
//         detail: {
//             move : p1_move
//         }
//     });

//     element.dispatchEvent(event);
// }

function p1Move(containerElement, target){
    let p1move = document.createElement('div');
    p1move.className = "p1moveContainer";
    let p = document.createElement('p');
    p.textContent = target.innerText;
    //vsContainer.appendChild(vsCntnr);
    containerElement.appendChild(p1move);
    p1move.appendChild(p);

    return p.innerText;
}

// rpsBtn.addEventListener('click', (event) => {
//     let result = document.createElement('p');

//     result.textContent = event.target.innerText;
//     console.log(event);

//     gameContainer.appendChild(result);
// });


function p2Move(containerElement){
    let p2move = document.createElement('div');
    p2move.className = "p2moveContainer";
    let p = document.createElement('p');
    let player2move = getMove(Math.max(1, Math.floor(Math.random() * 4)));

    p.textContent = player2move;
    //p2moveContainer.appendChild(p2move);
    containerElement.appendChild(p2move);
    p2move.appendChild(p);

    return p.innerText;
}

function vs(containerElement){
    let vsCntnr = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "VS";
    //vsContainer.appendChild(vsCntnr);
    containerElement.appendChild(vsCntnr);
    vsCntnr.appendChild(p);

    return p.innerText;
}