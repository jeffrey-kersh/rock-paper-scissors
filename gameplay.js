//INSTRUCTIONS --> https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors#assignment

//Global Variables
let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection == computerSelection) {
        return "This round was a draw!";
    }

    if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    
    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

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

    while (playerScore < 5 && computerScore <5) {

        //get player choice and do not proceede until choice given
        result = (playRound(playerChoice, computerPlay()));
        //console.log(result);

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

function checkScore() {
        if (playerScore >= 5) {
            console.log("You Win!")
        } else if (computerScore >= 5){
            console.log("You Lose!")
        } else {
            console.log("No winner yet...")
        }
}

//Game Logic

    //playRound - write result to html doc
        //when round played - check score
            //if one players score = 5 - display winner to html doc

//add event listeners to get user input
rockButton = document.getElementById("Rock");
paperButton = document.getElementById("Paper");
scissorsButton = document.getElementById("Scissors");

rockButton.addEventListener('click', () => {
    playRound("Rock", computerPlay()); 
    checkScore();
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
});

paperButton.addEventListener('click', () => {
    playRound("Paper", computerPlay()); 
    checkScore();
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
});

scissorsButton.addEventListener('click', () => {
    playRound("Scissors", computerPlay()); 
    checkScore();
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
});

//To Do:
    //1) Write new score to html at the end of each round
    //2) Write result of round to html at the end of each round
    //3) When player reaches 5 - display winner in html and prevent another game from being played
    //4) Format HTML to look nice
    //5) Add images to buttons for better UX