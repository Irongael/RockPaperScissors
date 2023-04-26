let playScore = 0; 
let compScore = 0;
let playerScore = document.querySelector('#playerScore'); 
let computerScore = document.querySelector('#compScore');
let playerSelect = document.querySelector('#playerSelect');
let computerSelect = document.querySelector('#compSelect');

function getComputerChoice() 
{ //uses Math.random to assign a choice for the computer player
    let compNum = Math.random();

    if(compNum <= 0.3332)
    {
        return 0;
    }
    else if(compNum >= 0.3333 && compNum < 0.6667)
    {
        return 1;
    }
    else 
    {
        return 2;
    }
}

function decodeChoice(number) {
    //decodes what the random compchoice is "rock paper or scissors"
    if(number == 0) 
    {
        computerSelect.textContent = "Rock";
    }
    else if(number == 1) 
    {
        computerSelect.textContent = "Paper";
    }
    else if(number == 2) 
    {
        computerSelect.textContent = "Scissors";
    }
    else 
    {
        computerSelect.textContent = "Gun? WTF";
    }
}

function playRound(playerSelection, compSelection)
{
    //plays a round of rock paper scissors and checks which player wins.
    if(compSelection == 0 && (playerSelection.toUpperCase()) == "SCISSORS") 
    {
        decodeChoice(compSelection);
        return 0; //returns 0 for a loss
    }
    else if(compSelection == 0 && (playerSelection.toUpperCase()) == "PAPER") 
    {
        decodeChoice(compSelection);
        return 1; //returns 1 for a win
    }
    else if(compSelection == 1 && (playerSelection.toUpperCase()) == "ROCK") 
    {
        decodeChoice(compSelection);
        return 0;
    }
    else if(compSelection == 1 && (playerSelection.toUpperCase()) == "SCISSORS") 
    {
        decodeChoice(compSelection);
        return 1;
    }
    else if(compSelection == 2 && (playerSelection.toUpperCase()) == "PAPER") 
    {
        decodeChoice(compSelection);
        return 0;
    }
    else if(compSelection == 2 && (playerSelection.toUpperCase()) == "ROCK") 
    {
        decodeChoice(compSelection);
        return 1;
    }
    else 
    {
        decodeChoice(compSelection);
        return 2; //returns 2 for inconclusive
    }
}

function game(playSel) 
{
    let compSel = getComputerChoice();
    let result = playRound(playSel, compSel);
    //sets the scores at the begining of each game to make sure score properly displayed
    playerScore.textContent = playScore;
    computerScore.textContent = compScore;

    //tests to see who wins based off playRound function and updates scores accordingly
    if(result == 0)
    {
        compScore++;
        computerScore.textContent = compScore;
    }
    else if(result == 1)
    {
        playScore++;
        playerScore.textContent = playScore;
    }
    else
    {
        console.log("nobody won")
    }
    //for displaying the winner
    let winner = document.querySelector('#winner');

    if(playScore >= 5)
    {
        winner.textContent = "First to 5 wins! Player Wins!";
        playScore = 0;
        compScore = 0;
        
    }
    else if(compScore >= 5)
    {
        winner.textContent = "First to 5 wins! Computer Wins!";
        playScore = 0;
        compScore = 0;
    }
    else 
    {
        console.log("nobody yet keep playing til a player gets 5 wins!");
        winner.textContent = " ";
    }
}


//event listeners for player selection
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    //runs game with proper choice and sets the correct playersel to be displayed
    game('rock')
    playerSelect.textContent = "Rock";
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    game('paper')
    playerSelect.textContent = "Paper";
});

const scissorBtn = document.querySelector('#scissorBtn');
scissorBtn.addEventListener('click', () => {
    game('scissors')
    playerSelect.textContent = "Scissors";
});



