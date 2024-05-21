let humanScore = 0;
let computerScore = 0;
let humanSelection = document.querySelector("#human_selection")
let computerSelection = document.querySelector("#computer_selection")
let actualResult = document.querySelector(".actual-result");
let buttonsContainer = document.querySelector(".buttons-container");

buttonsContainer.addEventListener("click", function(event){
    let target = event.target;
    switch(target.id){
        case "rock":
            playRound("rock", getComputerChoice());
            displayScoreSelection();
            isGameFinished();
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            displayScoreSelection();
            isGameFinished();
            break;
        case "scissor":
            playRound("scissor", getComputerChoice());
            displayScoreSelection();
            isGameFinished();
            break;
    }
})

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33){
        return "rock"
    }
    else if (randomNumber >= 0.33 && randomNumber < 0.66){
        return "paper";
    }
    else {
        return "scissor";
    }
}

// Function that runs one round of rock paper scissor
function playRound(humanChoice, computerChoice) {
    humanSelection.textContent = humanChoice;
    computerSelection.textContent = computerChoice;
    actualResult.textContent = "";

    if (humanChoice == computerChoice){
        actualResult.textContent = "Tied!"
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissor"){
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissor"){
        computerScore++;
    }
    else if (humanChoice == "scissor" && computerChoice == "rock"){
        computerScore++;
    }
    else if (humanChoice == "scissor" && computerChoice == "paper"){
        humanScore++;
    }
}

function displayScoreSelection(){
    let dispHumanScore = document.querySelector("#human_score");
    let dispComputerScore = document.querySelector("#computer_score");
    dispHumanScore.textContent = humanScore
    dispComputerScore.textContent = computerScore;
}

function isGameFinished(){
    if (computerScore == 5 || humanScore == 5){
        displayWinner();
    }
}

function displayWinner(){
     if (humanScore == 5){
         actualResult.textContent = "Human won, congrats!";
     }
     else {
         actualResult.textContent = "Computer won, sorry!";
    }
}