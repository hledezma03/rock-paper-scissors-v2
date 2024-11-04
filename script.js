function getComputerChoice() {
    const computerChoice = (Math.floor(Math.random() * 3)) + 1;
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2){
        return "Paper";
    } else {
        return "Scissors";
    };
}

function getHumanChoice() {
    const userChoice = parseInt(prompt('Enter a number between 1 and 3'));
    if (userChoice === 1) {
        return "Rock";
    } else if (userChoice === 2){
        return "Paper";
    } else {
        return "Scissors";
    };
}

let humanScore = 0;
let computerScore = 0;



