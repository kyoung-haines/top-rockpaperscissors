function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()* 3 + 1);

    switch(randomNumber) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt('Enter a number between 1-3 (inclusive):'));

    switch(humanChoice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}