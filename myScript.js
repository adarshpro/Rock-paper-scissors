

function playerPlay(){
    let playerSelection = prompt("Choose ur play")
    let input = playerSelection.toUpperCase();
    return input;
    
}
//console.log(playerPlay());



function computerPlay(){
    let computerSelection = '';
    let randomComputer = Math.floor(Math.random() * 3);
    if (randomComputer === 0){
        computerSelection = "ROCK";
    } else if (randomComputer === 1){
        computerSelection = "PAPER";
    } else {
        computerSelection = "SCISSORS";
    }
    return computerSelection;

}



function playRound(input, computerSelection){
    let output = '';
    if(input === computerSelection){
        output = "DRAW";
    } else if ((input === "PAPER") && (computerSelection === "ROCK")){
        output = "You WIN, Paper beats Rock";
    } else if ((input ==="PAPER") && (computerSelection === "SCISSORS")){
        output = "You LOSE, Scissors beats Paper";
    } else if ((input === "ROCK") && (computerSelection === "PAPER")){
        output = "You LOSE, Paper beats Rock";
    } else if ((input === "ROCK") && (computerSelection === "SCISSORS")){
        output = "You WIN, Rock beats Scissors";
    } else if ((input === "SCISSORS") && (computerSelection === "ROCK")){
        output = "LOSE";
    }else {
        output = "WIN";
    }
    return output;
}



function game(){
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = '';
   
    for (let i = 0; i < 5; i++){
       roundResult = playRound(playerPlay(),computerPlay())
       if (roundResult.includes("WIN")){
           playerScore += 1;
           console.log(roundResult + " Your score: "+ playerScore + " Computer score: "+ computerScore);
       } else if (roundResult.includes("LOSE")){
           computerScore += 1;
           console.log(roundResult + " Your score: "+ playerScore + " Computer score: "+ computerScore);
        } else {
            console.log("its a tie")
        }
 }
 if (playerScore > computerScore){
     console.log("you won the game!");
    } else{
        console.log("you lost");
    }
}
game();
//console.log(game(playerPlay()));
