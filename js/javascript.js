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

function game() 
{
    let playScore = 0;
    let compScore = 0;
    let gameCount = 0;
    
    let compSel = getComputerChoice();
    let playSel = prompt("Select Rock Paper or Scissors to play!", "Enter Choice");
    let result = playRound(playSel, compSel);

    if(result == 0)
    {
        compScore++;
        gameCount++;
    }
    else if(result == 1)
    {
        playScore++;
        gameCount++;
    }
    else
    {
        console.log("No Winner Play Again!")
    }
    console.log("Player Score: " + playScore);
    console.log("Computer Score: " + compScore);

    if(playScore >= 3)
    {
        console.log("Player Wins Best of 5!")
    }
    else if(compScore >= 3)
    {
        console.log("Computer Wins Best of 5! Better Luck Next Time!")
    }
    else 
    {
        console.log("nobody won interesting...")
    }
}

game();