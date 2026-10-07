
function getComputerChoice() {
    let computerChoice;
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    
}

let humanScore = 0;

let computerScore = 0;


function playRound(humanChoice) {

    const computerChoice = getComputerChoice();
    if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock" 
    ) {
        humanScore++;
        return `You win ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === computerChoice) {
        return `You draw ${humanChoice} ties with ${computerChoice}`;
        
    }

    else {
        computerScore++;
        return `You Lose ${computerChoice} beats ${humanChoice}`;
    }
}
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    const results = document.querySelector("#results");

    rockButton.addEventListener("click", () => {
        results.textContent = playRound("rock");
    });

    paperButton.addEventListener("click", () => {
        results.textContent = playRound("paper");
    });

    scissorsButton.addEventListener("click", () => {
        results.textContent = playRound("scissors");
    });
    
   
//console.log(`Score -> Human: ${humanScore} | Computer: ${computerScore}`);

