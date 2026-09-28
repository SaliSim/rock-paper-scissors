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

    return humanChoice
}


let humanScore = 0;

let computerScore = 0;
