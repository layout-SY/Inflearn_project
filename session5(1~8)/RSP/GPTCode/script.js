// DOM Elements
const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');
const count = document.getElementById('count');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const cycleResult = document.getElementById('cycle-result');
const selectContainer = document.querySelector('.select-container');
const resultContainer = document.querySelector('.result-container');
const winMessage = document.getElementById('win');
const loseMessage = document.getElementById('lose');
const pairMessage = document.getElementById('pair');
const resetButton = document.getElementById('reset');

// Game State
let leftCount = 10;
let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'scissor', 'paper'];

// Initialize Game
function initializeGame() {
	count.innerText = `남은 횟수 : ${leftCount}`;
	resetButton.addEventListener('click', resetGame);
	attachButtonEvents();
}

// Attach event listeners to buttons
function attachButtonEvents() {
	[rock, scissor, paper].forEach((button) => {
		button.addEventListener('click', () => handlePlayerChoice(button));
	});
}

// Handle player's choice and game round logic
function handlePlayerChoice(button) {
	playRound(button);

	if (leftCount === 1) {
		endGame();
	} else {
		leftCount--;
		count.innerText = `남은 횟수 : ${leftCount}`;
	}
}

// Play one round of the game
function playRound(button) {
	const computerChoice = getRandomChoice();
	const playerChoice = button.id;

	if (computerChoice === playerChoice) {
		cycleResult.innerText = '무승부';
	} else if (isPlayerWinner(playerChoice, computerChoice)) {
		playerScore++;
		playerScoreElement.innerText = playerScore;
		cycleResult.innerText = '플레이어 승리';
	} else {
		computerScore++;
		computerScoreElement.innerText = computerScore;
		cycleResult.innerText = '컴퓨터 승리';
	}
}

// Determine if player won the round
function isPlayerWinner(playerChoice, computerChoice) {
	return (
		(playerChoice === 'rock' && computerChoice === 'scissor') ||
		(playerChoice === 'scissor' && computerChoice === 'paper') ||
		(playerChoice === 'paper' && computerChoice === 'rock')
	);
}

// Get a random choice for the computer
function getRandomChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

// End the game and display the final result
function endGame() {
	selectContainer.classList.add('hide');
	resultContainer.classList.add('show');

	if (computerScore > playerScore) {
		loseMessage.hidden = false;
	} else if (computerScore < playerScore) {
		winMessage.hidden = false;
	} else {
		pairMessage.hidden = false;
	}
}

// Reset the game to its initial state
function resetGame() {
	// Reset scores and counts
	playerScore = 0;
	computerScore = 0;
	leftCount = 10;

	// Reset DOM elements
	playerScoreElement.innerText = playerScore;
	computerScoreElement.innerText = computerScore;
	count.innerText = `남은 횟수 : ${leftCount}`;
	cycleResult.innerText = '';

	// Hide result messages
	winMessage.hidden = true;
	loseMessage.hidden = true;
	pairMessage.hidden = true;

	// Show the selection container and hide the result container
	selectContainer.classList.remove('hide');
	resultContainer.classList.remove('show');
}

// Initialize the game on load
initializeGame();
