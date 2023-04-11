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

let compSel = getComputerChoice();

let playSel = prompt("Select Rock Paper or Scissors to play!", "Rock");

function playRound(playerSelection, compSelection)
{

}

decodeChoice(compSel);