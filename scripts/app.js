function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()* 3 + 1);
    let computerChoice;

    switch(randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
    console.log(`Computer Choice: ${computerChoice}`);
}

function getHumanChoice() {
    let humanChoice = prompt('Enter your selection (rock/paper/scissors):');
    humanChoice = humanChoice.toLowerCase();
    console.log(`Human Choice: ${humanChoice}`);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {

}