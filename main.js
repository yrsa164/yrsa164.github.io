let userScore = 0;
let computerScore = 0;
// DOM variables
const newGame_button = document.getElementById('new-game');
const userScore_paragraph = document.getElementById('player-score');
const computerScore_paragraph = document.getElementById('computer-score');
let userMatch_icon = document.getElementById('player-hand');
const computerMatch_icon = document.getElementById('computer-hand');
const result_section = document.getElementById('result');
const resultDescription_heading = document.getElementById('result-desc');
const winnerDescription_heading = document.getElementById('winner-desc')
const options_div = document.getElementById('options');
const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scissors_button = document.getElementById('scissors');
const lizard_button = document.getElementById('lizard');
const spock_button = document.getElementById('spock');

let winnerArr = {
    rock: {
        paper: ['lose', 'covers'],
        scissors: ['win', 'crushes'],
        lizard: ['win', 'crushes'],
        spock: ['lose', 'vaporizes']
    },
    paper: {
        rock: ['win', 'covers'],
        scissors: ['lose', 'cut'],
        lizard: ['lose', 'eats'],
        spock: ['win', 'disproves']
    },
    scissors: {
        rock: ['lose', 'crushes'],
        paper: ['win', 'cut'],
        lizard: ['win', 'decapitates'],
        spock: ['lose', 'smashes']
    },
    lizard: {
        rock: ['lose', 'crushes'],
        paper: ['win', 'eats'],
        scissors: ['lose', 'decapitates'],
        spock: ['win', 'poisons']
    },
    spock: {
        rock: ['win', 'vaporizes'],
        paper: ['lose', 'disproves'],
        scissors: ['win', 'smashes'],
        lizard: ['lose', 'poisons']
    }
};
//click Let's Play -> shows hands for user
newGame_button.addEventListener('click', function () {
    displaySetting('none', 'hidden', 'flex', 'hidden');
});

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randNumber = Math.floor(Math.random() * 5);
    return choice[randNumber];
}

function changeComputerHand(compSelect) {
    switch (compSelect) {
        case 'rock':
            computerMatch_icon.className = 'far fa-hand-rock';
            break;
        case 'paper':
            computerMatch_icon.className = 'far fa-hand-paper';
            break;
        case 'scissors':
            computerMatch_icon.className = 'far fa-hand-scissors';
            break;
        case 'lizard':
            computerMatch_icon.className = 'far fa-hand-lizard';
            break;
        case 'spock':
            computerMatch_icon.className = 'far fa-hand-spock';
            break;
    }
}

function handChoice(userChoice) {
    const computerChoice = getComputerChoice();
    let resultArray = winnerArr[userChoice][computerChoice];
    changeComputerHand(computerChoice);
    if (userChoice === computerChoice) {
        winnerDescription_heading.innerHTML = 'Draw!'
        displaySetting('flex', 'hidden', 'none', 'visible');
    } else if (resultArray[0] === 'win') {
        userScore++;
        userScore_paragraph.innerHTML = userScore.toString();
        createMatchDescription(userChoice, computerChoice, 'Player');
        displaySetting('flex', 'visible', 'none', 'visible');
    } else if (resultArray[0] === 'lose') {
        computerScore++;
        computerScore_paragraph.innerHTML = computerScore.toString();
        createMatchDescription(computerChoice, userChoice, 'computer');
        displaySetting('flex', 'visible', 'none', 'visible');
    } else {
        console.log('unexpected behaviour');
    }
}

function createMatchDescription(winnerChoice, loserChoice, winner) {
    const xyz = winnerArr[winnerChoice][loserChoice];
    console.log(xyz);
    resultDescription_heading.innerHTML = `${winnerChoice} ${xyz[1]} ${loserChoice}`;
    winnerDescription_heading.innerHTML = `${winner} win!`;
}

function displaySetting(resultSectionDisplay, resultDescriptionVisibility, optionDivDisplay, newGameButtonVisibility) {
    result_section.style.display = resultSectionDisplay;
    resultDescription_heading.style.visibility = resultDescriptionVisibility;
    options_div.style.display = optionDivDisplay;
    newGame_button.style.visibility = newGameButtonVisibility;
}

function mainGame() {
    rock_button.addEventListener('click', function () {
        handChoice('rock');
        userMatch_icon.className = 'far fa-hand-rock';
    });
    paper_button.addEventListener('click', function () {
        handChoice('paper');
        userMatch_icon.className = 'far fa-hand-paper';
    });
    scissors_button.addEventListener('click', function () {
        handChoice('scissors');
        userMatch_icon.className = 'far fa-hand-scissors';
    });
    lizard_button.addEventListener('click', function () {
        handChoice('lizard');
        userMatch_icon.className = 'far fa-hand-lizard';
    });
    spock_button.addEventListener('click', function () {
        handChoice('spock');
        userMatch_icon.className = 'far fa-hand-spock';
    });
}

mainGame();