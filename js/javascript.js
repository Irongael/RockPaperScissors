let playScore = 0;
let compScore = 0;
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#compScore');

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
        console.log("Computer Player Chooses Rock!");
    }
    else if(number == 1) 
    {
        console.log("Computer Player Chooses Paper!");
    }
    else if(number == 2) 
    {
        console.log("Computer Player Chooses Scissors!");
    }
    else 
    {
        console.log("Computer Player Chooses a Gun?! Something is Wrong.");
    }
}

function playRound(playerSelection, compSelection)
{
    //plays a round of rock paper scissors and checks which player wins.
    if(compSelection == 0 && (playerSelection.toUpperCase()) == "SCISSORS") 
    {
        decodeChoice(compSelection);
        console.log("You Picked " + playerSelection);
        console.log("You Lose!");
        return 0; //returns 0 for a loss
    }
    else if(compSelection == 0 && (playerSelection.toUpperCase()) == "PAPER") 
    {
        decodeChoice(compSelection);
        console.log("You Picked " + playerSelection);
        console.log("You Win!");
        return 1; //returns 1 for a win
    }
    else if(compSelection == 1 && (playerSelection.toUpperCase()) == "ROCK") 
    {
        decodeChoice(compSelection);
        console.log("You Picked " + playerSelection);
        console.log("You Lose!");
        return 0;
    }
    else if(compSelection == 1 && (playerSelection.toUpperCase()) == "SCISSORS") 
    {
        decodeChoice(compSelection);
        console.log("You Picked " + playerSelection);
        console.log("You Win!");
        return 1;
    }
    else if(compSelection == 2 && (playerSelection.toUpperCase()) == "PAPER") 
    {
        decodeChoice(compSelection);
        console.log("You Picked " + playerSelection);
        console.log("You Lose!");
        return 0;
    }
    else if(compSelection == 2 && (playerSelection.toUpperCase()) == "ROCK") 
    {
        decodeChoice(compSelection);
        console.log("You Picked " + playerSelection);
        console.log("You Win!");
        return 1;
    }
    else 
    {
        decodeChoice(compSelection);
        console.log("You Picked " + playerSelection);
        return 2; //returns 2 for inconclusive
    }
}

function game(playSel) 
{
    let compSel = getComputerChoice();
    let result = playRound(playSel, compSel);

    playerScore.textContent = playScore;
    computerScore.textContent = compScore;

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
        console.log("No Winner Play Again!")
    }
    console.log("Player Score: " + playScore);
    console.log("Computer Score: " + compScore);

    if(playScore >= 5)
    {
        console.log("Player Wins Best of 5!")
        playScore = 0;
        compScore = 0;
        
    }
    else if(compScore >= 5)
    {
        console.log("Computer Wins Best of 5! Better Luck Next Time!")
        playScore = 0;
        compScore = 0;
    }
    else 
    {
        console.log("nobody yet keep playing til a player gets 5 wins!")
    }
}



const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    game('rock')
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    game('paper')
});

const scissorBtn = document.querySelector('#scissorBtn');
scissorBtn.addEventListener('click', () => {
    game('scissors')
});



