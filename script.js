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
console.log(getComputerChoice());