function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1){
        return "rock"
    } else if (choice == 2){
        return "paper"
    } else {
        return "scissors"
    }
}
function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    let lower = choice.toLowerCase();
    if (lower == "rock" || lower == "paper" || lower == "scissors") {
        return lower;
    } else {
        return getHumanChoice();
    }
}

function playRound(humanScore, computerScore) {
    if (humanScore == computerScore) {
        return "Tie";
    }
    if (humanScore == "rock" && computerScore == "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (humanScore == "paper" && computerScore == "rock") {
        return "You Win! Paper beats Rock";
    } else if (humanScore == "scissors" && computerScore == "paper") {
        return "You Win! Scissors beats Paper";
    } else {
        return "You Lose! " + computerScore + " beats " + humanScore;
    }
}

function playGame() {
    let round = 0;
    while (round < 5) {
        const humanScore = getHumanChoice();
        const computerScore = getComputerChoice();
        console.log(playRound(humanScore, computerScore));
        round++;
    }
}

playGame();