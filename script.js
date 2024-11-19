const playerBtns = document.querySelectorAll('.player-btn');
const roundWinner = document.querySelector('.round-winner');
const cpuPoints = document.querySelector('.cpu-points');
const playerPoints = document.querySelector('.player-points');
const winnerText = document.querySelector('.winner-text');
const resetButton = document.querySelector('.reset-btn');
let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Rock") 
    {
        computerScore++;
        cpuPoints.textContent = computerScore;
        roundWinner.textContent = 'You loose! Computer Choice: ' + computerChoice + ' beats Human Choice: ' + humanChoice;
    } else if (humanChoice === computerChoice) {
        roundWinner.textContent = "It's a tie! You both chose " + humanChoice;
    } else {
        humanScore++;
        playerPoints.textContent = humanScore;
        roundWinner.textContent = 'You won! Human Choice: ' + humanChoice + ' beats Computer Choice: ' + computerChoice;
    };
};

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    playerPoints.textContent = '0';
    cpuPoints.textContent = '0';
    winnerText.textContent = '';
    playerBtns.forEach(button => button.disabled = false);
    resetButton.classList.toggle('hidden');
}

function checkWinner() {
    if (humanScore == 5 || computerScore == 5) {
        roundWinner.textContent = '';
        resetButton.classList.toggle('hidden');
        playerBtns.forEach(btn => btn.disabled = true);
        if (humanScore < computerScore) {
            winnerText.textContent = "You loose! You: " + humanScore + '. Computer: ' + computerScore;
        } else {
            winnerText.textContent = "You won! You: " + humanScore + '. Computer: ' + computerScore;
        }
    }
}


playerBtns.forEach(button => {
    button.addEventListener("click",(e) => {
        const humanChoice = e.target.innerText;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        checkWinner();
    })
});

resetButton.addEventListener("click", resetGame);




