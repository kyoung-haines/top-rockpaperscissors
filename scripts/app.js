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
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('Enter your selection (rock/paper/scissors):');
    humanChoice = humanChoice.toLowerCase();
    console.log(`Human Choice: ${humanChoice}`);
    return humanChoice;
}

function playGame() {
let humanScore = 0;
let computerScore = 0;
let winMessage = 'Congrats! You won!';
let loseMessage = 'You lost! Better luck next time!';

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        if(
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
         ) {
            console.log(winMessage);
            ++humanScore;
            console.log(`CURRENT SCORE\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
        }
        else {
            console.log(loseMessage);
            ++computerScore;
            console.log(`CURRENT SCORE\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
        }
    }
   for(let i = 0; i < 5; i++) {
    playRound();
   }
   console.log('End of rounds. Game closing.');
}

playGame();