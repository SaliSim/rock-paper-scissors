
function getComputerChoice() {
    let computerChoice;
    const num = Math.random();
    

    if (num < 1 / 3) {
        computerChoice = "Rock";
    
    } else if (num < 2 / 3) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors"
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice between Rock, Paper and Scissors: ");

    return humanChoice;
}
let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Rock" 
    ) {
        humanScore++;
        return `You win ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === computerChoice) {
        return `You draw ${humanChoice} ties with ${computerChoice}`;
        
    }

    else {
        computerScore++;
        return `You Loose ${computerChoice} beats ${humanChoice}`;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

console.log(`Score -> Human: ${humanScore} | Computer: ${computerScore}`);


function playGame(playRound) {
    
    
}

console.log(playGame(playRound));