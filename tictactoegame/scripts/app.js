let editedPlayer = 0;

let activePlayer = 0;

let currentRound  = 1;

let gameIsOver = false;

const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0] 
]

const players = [
    {
        name: '' ,
        symbol: 'X'
    } ,
    {
        name:'' ,
        symbol: 'O'
    } ,
];

const editPlayer1ButtonElement = document.getElementById("edit-player-1-btn");
const editPlayer2ButtonElement = document.getElementById("edit-player-2-btn");

const configOverlayElement = document.getElementById("config-overlay");
const backdropELement = document.getElementById("backdrop");

const cancelConfigButtonElement = document.getElementById("cancel-congif-btn");

const formELement = document.querySelector("form");

const errorOutputELement = document.getElementById('config-error');

const startNewGameButtonElement  =  document.getElementById('start-game-btn');
const gameAreaELement = document.getElementById('active-game');

const gameBoardElement = document.getElementById('game-board');

const gameFiedElemenets = document.querySelectorAll('#game-board li')

const activePlayerNameElement = document.getElementById('active-player-name');

const gameOverElement = document.getElementById('game-over');

editPlayer1ButtonElement.addEventListener("click", openPlayerConfigOverlay);
editPlayer2ButtonElement.addEventListener("click", openPlayerConfigOverlay);

cancelConfigButtonElement.addEventListener("click", closePlayerConfigOverlay);
backdropELement.addEventListener("click", closePlayerConfigOverlay);

formELement.addEventListener("submit", savePlayerConfig);

startNewGameButtonElement.addEventListener('click' , startNewGame);

for (const gameFieldElement of gameFiedElemenets) {
    gameFieldElement.addEventListener('click' , selectGameField);
}

