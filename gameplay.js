//INSTRUCTIONS --> https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors#assignment

//Function computerPlay - have computer randomly choose rock, paper, scissors
function computerPlay() {
    let move;
    let min = Math.ceil(3);
    let max = Math.floor(1);
    let moveID = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch (moveID) {
        case (1): move = "Rock"
        break;
        
        case (2): move = "Paper";
        break;

        case (3): move = "Scissors";
        break;
     }

    return move;
}

// function playerChoice(buttonId) {
//     if (buttonId == null) {
//         return "No Input";
//     }
//     console.log(buttonId)
//     return buttonId;
// }

function playRound(playerSelection, computerSelection) {

    //convert players selection to properly capitalized move
    //playerSelection.toLowerCase();
    //playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection == computerSelection) {
        return "This round was a draw!";
    }

    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    if (playerSelection == "Paper" && computerSelection == "Rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    
    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

}

function getPlayerChoice() {
    //wait for user to click button
    //return result of button they click
    //when button is clicked - triggers fxn playerChoice(buttonId)

}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let numRounds = 5;
    let result;
    let winner;
    let rockButton;
    let paperButton;
    let scissorsButton;
    let playerChoice;

    //add event listeners to get user input
    rockButton = document.getElementById("Rock");
    paperButton = document.getElementById("Paper");
    scissorsButton = document.getElementById("Scissors");

    rockButton.addEventListener('click', () => {playerChoice = "Rock"});
    paperButton.addEventListener('click', () => {playerChoice = "Paper"});
    scissorsButton.addEventListener('click', () => {playerChoice = "Scissors"});

    while (playerScore < 5 && computerScore <5) {

        //get player choice and do not proceede until choice given
        result = (playRound(playerChoice, computerPlay()));
        console.log(result);

        //adjust players scores based on "you win..."
        if (result.charAt(4) == 'l') {
            computerScore++;
            document.getElementById("computerScore").innerHTML = computerScore;
        }
        else if (result.charAt(4) == 'w') {
            playerScore++;
            document.getElementById("playerScore").innerHTML = playerScore;
        }

    }

    if (playerScore > computerScore) {
        winner = `Congratulations! You won this game by a score of ${playerScore} to ${computerScore}.`;
    }
    else if (playerScore < computerScore) {
        winner = `Sorry! You lost this game by a score of ${playerScore} to ${computerScore}.`;
    }
    else {
        winner = `Looks like this game was a draw! Player: ${playerScore} Computer: ${computerScore}`;
    }

    return winner;
}

//run master function

console.log(game());