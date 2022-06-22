const choices = ["akmuo", "popierius", "žirklės"];
let winners = [];

function game() {

    let imgs=document.querySelectorAll('img');
    imgs.forEach((img)=>
    img.addEventListener("click", () => {
        if(img.id){
            playRound(img.id);
        }
    })
    );
}

function restartGame(){
    winners=[];
    document.querySelector('.playerScore').textContent="Taškai: 0";
    document.querySelector('.computerScore').textContent="Taškai: 0";
    document.querySelector('.ties').textContent="Lygiosios: 0";
    document.querySelector('.winner').textContent="";
    document.querySelector('.playerChoice').textContent="";
    document.querySelector('.computerChoice').textContent="";
    document.querySelector('.reset').style.display="none";
}

function checkWins(){
    let playerWins = winners.filter((item) => item == "Žaidėjas").length;
    let computerWins = winners.filter((item) => item == "Kompiuteris").length;
    return Math.max(playerWins, computerWins);
}

function playRound(playerChoice) {
    let wins=checkWins();
   
    if(wins>=5){
        return;
    }

    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
    if(wins==5){
    displayEnd();
  }
}

function displayEnd(){
    let playerWins = winners.filter((item) => item == "Žaidėjas").length;

    if(playerWins==5){
        document.querySelector('.winner').textContent='Tu laimėjai!';
    }
    else{
        document.querySelector('.winner').textContent='Deja, kompiuteris laimėjo';
    }
    document.querySelector('.reset').style.display ="flex";
}

function displayRound(playerChoice, computerChoice, winner){
    document.querySelector('.playerChoice').textContent = `Tu pasirinkai: ${playerChoice}`;
    document.querySelector('.computerChoice').textContent = `Kompiuteris pasirinko: ${computerChoice}`;
    document.querySelector('.winner').textContent = `Laimėjo: ${winner}`;
}

function tallyWins(){
  const pWinCount = winners.filter((item) => item == "Žaidėjas").length;
  const cWinCount = winners.filter((item) => item == "Kompiuteris").length;
  const ties = winners.filter((item) => item == "Lygiosios").length;
  document.querySelector('.playerScore').textContent = `Taškai: ${pWinCount}`;
  document.querySelector('.computerScore').textContent = `Taškai: ${cWinCount}`;
  document.querySelector('.ties').textContent = `Lygiosios: ${ties}`;
}

function computerSelect() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Lygiosios";
  } else if (
    (choiceP === "akmuo" && choiceC == "žirklės") ||
    (choiceP === "popierius" && choiceC == "akmuo") ||
    (choiceP === "žirklės" && choiceC == "popierius")
  ) {
    return "Žaidėjas";
  } else {
    return "Kompiuteris";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Žaidėjas").length;
  let computerWins = winners.filter((item) => item == "Kompiuteris").length;
  let ties = winners.filter((item) => item == "Lygiosios").length;
}

game();