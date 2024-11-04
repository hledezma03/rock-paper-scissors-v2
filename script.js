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
    const humanChoice = parseInt(prompt('Enter a number between 1 and 3'));
    if (humanChoice === 1) {
        return "Rock";
    } else if (humanChoice === 2){
        return "Paper";
    } else {
        return "Scissors";
    };
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        return console.log('You loose! ' + computerChoice + ' beats ' + humanChoice);
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        return console.log('You loose! ' + computerChoice + ' beats ' + humanChoice);
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;
        return console.log('You loose! ' + computerChoice + ' beats ' + humanChoice);
    } else if (humanChoice === computerChoice) {
        return console.log("It's a tie! You both chose " + humanChoice);
    } else {
        humanScore++;
        return console.log('You won! ' + humanChoice + ' beats ' + computerChoice);
    } 
};


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);




