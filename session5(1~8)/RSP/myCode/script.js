const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');
const count = document.getElementById('count');
const player_score = document.getElementById('player-score');
const computer_score = document.getElementById('computer-score');
const cycle_result = document.getElementById('cycle-result');
const select_container = document.querySelector('.select-container'); // querySelector로 해야 함. getElementByClassName 하면 안됨
const result_container = document.querySelector('.result-container');
const win = document.getElementById('win');
const lose = document.getElementById('lose');
const pair = document.getElementById('pair');
const reset = document.getElementById('reset');

let left_count = 10;
let computer = 0;
let player = 0;
let rsp = ['rock', 'scissor', 'paper'];

count.innerText = `남은 횟수 : ${left_count}`;
function buttonClickedEvent(button) {
	RSP(button);
}

function buttonClicked(button) {
	button.addEventListener('click', () => {
		buttonClickedEvent(button);

		if (left_count === 1) {
			result();
		} else {
			left_count--;
			count.innerText = `남은 횟수 : ${left_count}`;
		}
	});
}

function RSP(button) {
	const computer_RSP = rsp[Math.floor(Math.random() * 3)];
	if (computer_RSP === button.id) {
		cycle_result.innerText = '무승부';
	} else if (
		(button.id === 'rock' && computer_RSP === 'scissor') ||
		(button.id === 'scissor' && computer_RSP === 'paper') ||
		(button.id === 'paper' && computer_RSP === 'rock')
	) {
		player++;
		player_score.innerText = player;
		cycle_result.innerText = '플레이어 승리';
	} else {
		computer++;
		computer_score.innerText = computer;
		cycle_result.innerText = '컴퓨터 승리';
	}
}

function result() {
	select_container.classList.add('hide');
	result_container.classList.add('show');
	if (computer > player) {
		lose.hidden = false;
	} else if (computer < player) {
		win.hidden = false;
	} else {
		pair.hidden = false;
	}
}

buttonClicked(rock);
buttonClicked(scissor);
buttonClicked(paper);
