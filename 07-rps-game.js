let choice = ''; 
let computerChoice = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')) || {
Wins: 0,
Losses: 0, 
Ties: 0
};                      //using Default operator

// if (!score){
    // 	score = {
    // 		Wins: 0,
    // 		Losses: 0, 
    // 		Ties: 0S
    // 	}
// }

console.log(JSON.parse(localStorage.getItem('score')));

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
}


function computerMove() {
    if (0 < computerChoice && computerChoice < (1/3)){
        computerChoice = 'rock';
    } else if ((1/3) < computerChoice && computerChoice < (2/3)){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    };
    }

function playerMove(choice) {
    if (choice === 'scissors'){
        if (choice === computerChoice){
            result = 'Tie.';
        } else if (computerChoice === 'paper'){
            result = 'You win!';
        } else if (computerChoice === 'rock'){
            result = 'You lose!'; 
        };
    } else if (choice === 'paper'){
        if (choice === computerChoice){
            result = 'Tie.';
        } else if (computerChoice === 'rock'){
            result = 'You win!';
        } else if (computerChoice === 'scissors'){
            result = 'You lose!'; 
        };
    } else if (choice === 'rock'){
        if (choice === computerChoice){
            result = 'Tie.';
        } else if (computerChoice === 'scissors'){
            result = 'You win!'; 
        } else if (computerChoice === 'paper'){
            result = 'You lose!'; 
        };
    }

    if (result === 'You win!'){
    score.Wins += 1;
    } else if (result === 'You lose!'){
    score.Losses += 1;
    } else if (result === 'Tie.'){
    score.Ties += 1;
    } 

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-choices').innerHTML = `You ${choice}-${computerChoice} Computer`;

}