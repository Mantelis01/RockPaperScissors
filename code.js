
let choices=["rock", "paper", "scissors"];
const winners=[];
let playerScore = 0;
let computerScore = 0;

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice(){
    let input = prompt("Rock, paper or scissors?");
    input=input.toLowerCase();
    return input;
}

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    console.log(winners); 
}


function checkWinner(ChoiceP, choiceC){
    if(ChoiceP === "rock" && choiceC==="scissors"){
        return "You win! Rock beats scissors!";
    }
    else if(ChoiceP==="rock" && choiceC==="paper"){
        return "You loose! Paper beats rock!";
    }
    else if(ChoiceP==="rock" && choiceC==="rock"){
        return "Tie!";
    }
    else if(ChoiceP==="scissors" && choiceC==="paper"){
        return "You win! Scissors beat paper!";
    }
    else if(ChoiceP==="scissors" && choiceC==="rock"){
        return "You loose! Rock beats scissors!";
    }
    else if(ChoiceP==="scissors" && choiceC==="scissors"){
        return "Tie!";
    }
    else if(ChoiceP==="paper" && choiceC==="paper"){
        return "Tie!";
    }
    else if(ChoiceP==="paper" && choiceC==="rock"){
        return "You Win! Paper beats rock!";
    }
    else if(ChoiceP==="paper" && choiceC==="scissors"){
        return "You loose! scissors beat paper!";
    }
    else{return "Error, typo?";}
}


function calculateScore(outcome) {
    if (outcome == 1) {
        playerScore++;
    } else if (outcome == 2) {
        computerScore++;
        playerScore++;
    } else if (outcome == 0) {
        computerScore++;
    };
}


function game(){
    for(let i=0;i<5;i++){
        playRound();
    }
    console.log("Player score: ");
    console.log(playerScore);
    console.log("Computer score: ");
    console.log(computerScore);
}

game();