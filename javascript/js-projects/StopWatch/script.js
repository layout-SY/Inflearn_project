const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let seconds = 0;
let tens = 0;
let interval;

buttonStart.onclick = function () {
	interval = setInterval(startTimer, 10); //setInterval 1000ms => 1초. 10ms => appendTens 1 올림
};

buttonStop.onclick = function () {
	clearInterval(interval);
};

buttonReset.onclick = function () {
	seconds = 0;
	tens = 0;
	appendSeconds.innerHTML = seconds;
	appendTens.innerHTML = tens;
	clearInterval(interval);
};

function startTimer() {
	tens++;
	appendTens.innerHTML = tens;

	if (tens > 99) {
		console.log('seconds');
		seconds++;
		tens = 0;
		appendSeconds.innerHTML = seconds;
	}
}
