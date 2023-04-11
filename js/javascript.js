function getComputerChoice() { //uses Math.random to assign a choice for the computer player
    let compNum = Math.random();

    if(compNum <= 0.3)
    {
        return 0;
    }
    else if(compNum > 0.3 && compNum < 0.7)
    {
        return 1;
    }
    else 
    {
        return 2;
    }
}

function decodeChoice(number) {
    if(number == 0) {
        console.log("Computer Player Chooses Rock!");
    }
    else if(number == 1) {
        console.log("Computer Player Chooses Paper!");
    }
    else if(number == 2) {
        console.log("Computer Player Chooses Scissors!");
    }
    else 
    {
        console.log("Computer Player Chooses a Gun?! Something is Wrong.");
    }
}