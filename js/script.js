var p1Score = 0, p2Score = 0;
var score = 0;
const winningScore = 5;

play();

if(p1Score > p2Score){
    alert("Player 1 Wins!");
}
else{
    alert("Player 2 Wins!");
}

function play() {
    while(score < winningScore ) {
        let player1move = getMove(parseInt(prompt("What is your move? \nPress 1 for ROCK\n2 for PAPER\n3 for SCISSOR")));
        console.log("Player 1 : " + player1move);

        let player2move = getMove(Math.max(1, Math.floor(Math.random() * 4)));
        console.log("Player 2 : " + player2move);

        compareMove(player1move, player2move);
        score = getHighScore(p1Score, p2Score);
    }
}

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

function compareMove(p1_move, p2_move){
    if((p1_move === "ROCK" && p2_move === "SCISSOR") ||  (p1_move === "PAPER" && p2_move === "ROCK") || (p1_move === "SCISSOR" && p2_move === "PAPER")){
        console.log("Player 1 wins");
        p1Score += 1;
    }
    else if((p2_move === "ROCK" && p1_move === "SCISSOR") ||  (p2_move === "PAPER" && p1_move === "ROCK") || (p2_move === "SCISSOR" && p1_move === "PAPER")){
        console.log("Player 2 wins");
        p2Score += 1;
    }
    else {
        console.log("Draw");
    }
}

function getHighScore(p1_score, p2_score){
    console.log("Player 1 score : " , p1_score);
    console.log("Player 2 score : " , p2_score);

    let highScore = (p1_score > p2_score) ? p1_score : (p2_score > p1_score) ? p2_score : p1_score;

    console.log("Highest score between two players : " , highScore);
    return highScore;

}
