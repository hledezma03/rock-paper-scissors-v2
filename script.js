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
};



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "Rock" && computerChoice === "Paper" ||
            humanChoice === "Paper" && computerChoice === "Scissors" ||
            humanChoice === "Scissors" && computerChoice === "Rock") 
        {
            computerScore++;
            return console.log('You loose! Computer Choice: ' + computerChoice + ' beats Human Choice: ' + humanChoice);
        } else if (humanChoice === computerChoice) {
            return console.log("It's a tie! You both chose " + humanChoice);
        } else {
            humanScore++;
            return console.log('You won! Human Choice: ' + humanChoice + ' beats Computer Choice: ' + computerChoice);
        };
    };

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

    if (humanScore < computerScore) {
        console.log("You loose! You: " + humanScore + '. Computer: ' + computerScore);
    } else if (humanScore > computerScore) {
        console.log("You won! You: " + humanScore + '. Computer: ' + computerScore);
    } else {
        console.log("It's a tie! You both have " + humanScore + " points.");
    }
};


playGame();
