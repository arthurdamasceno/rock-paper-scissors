let humanScore = 0;
let computerScore = 0;
playGame();

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

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissor?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("Tied, rock and rock!");
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("Computer scores! Paper beats rock!");
        computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissor"){
        console.log("Human scores! Rock beats scissor!");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("Human scores! Paper beats rock!");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "paper"){
        console.log("Tied, paper and paper!");
    }
    else if (humanChoice == "paper" && computerChoice == "scissor"){
        console.log("Computer scores! Scissor beats paper");
        computerScore++;
    }
    else if (humanChoice == "scissor" && computerChoice == "rock"){
        console.log("computer scores! Rock beats scissor!")
        computerScore++;
    }
    else if (humanChoice == "scissor" && computerChoice == "paper"){
        console.log("Human scores! Scissor beats paper!");
        humanScore++;
    }
    else if (humanChoice == "scissor" && computerChoice == "scissor"){
        console.log("Tied, scissor and scissor");
    }
}

function playGame (){
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Final result:");
    if (humanScore > computerScore){
        console.log(`Human won! ${humanScore} x ${computerScore}`);
    }
    else if (computerScore > humanScore){
        console.log(`Computer won! ${computerScore} x ${humanScore}`);
    }
    else {
        console.log(`Tied game! ${humanScore} x ${computerScore}`);
    }
}