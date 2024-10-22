const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const next = document.getElementById('next');
const question = document.getElementById('question');
const body = document.body;

let count = 5;
let correctAnswer = null;
let failAnswer1 = null;
let failAnswer2 = null;

function buttonClicked() {
	answer1.addEventListener('click', handleAnswerClick);
	answer2.addEventListener('click', handleAnswerClick);
	answer3.addEventListener('click', handleAnswerClick);
	next.addEventListener('click', nextQuiz);
}

function handleAnswerClick(event) {
	if (count === 0) return;

	if (event.target.id === correctAnswer.id) {
		event.target.classList.add('correct-answer');
		body.classList.add('correct-background');
	} else {
		event.target.classList.add('wrong-answer');
		correctAnswer.classList.add('correct-answer');
		body.classList.add('wrong-background');
	}
	count--;
}

function resetStyles() {
	answer1.classList.remove('correct-answer', 'wrong-answer');
	answer2.classList.remove('correct-answer', 'wrong-answer');
	answer3.classList.remove('correct-answer', 'wrong-answer');
	body.classList.remove('correct-background', 'wrong-background');
}

function Quiz(left_data, right_data, operator, Random) {
	const answerArray = [answer1, answer2, answer3];
	const value = Random.Random_number(answerArray.length);

	const failValue1 = Random.Random_operator_selector(left_data + 30, right_data, operator);
	const failValue2 = Random.Random_operator_selector(left_data, right_data - 15, operator);
	const CorrectValue = Random.Random_operator_selector(left_data, right_data, operator);

	correctAnswer = answerArray[value];
	correctAnswer.innerText = CorrectValue;
	answerArray.splice(value, 1);

	failAnswer1 = answerArray[0];
	failAnswer2 = answerArray[1];
	failAnswer1.innerText = failValue1;
	failAnswer2.innerText = failValue2;
}

function Random_Math() {
	this.Random_number = function (num) {
		return Math.floor(Math.random() * num);
	};

	this.Random_operator = function () {
		const operator = ['+', '-', '*'];
		return operator[Math.floor(Math.random() * operator.length)];
	};

	this.Random_operator_selector = function (left_data, right_data, operator) {
		switch (operator) {
			case '+':
				return left_data + right_data;
			case '-':
				return left_data - right_data;
			case '*':
				return left_data * right_data;
		}
	};
}

function nextQuiz() {
	resetStyles();
	if (count === 0) {
		QuizEnd();
	}
	answer1.innerText = `answer1`;
	answer2.innerText = `answer2`;
	answer3.innerText = `answer3`;

	const Random = new Random_Math();
	const left_data = Random.Random_number(100);
	const right_data = Random.Random_number(100);
	const operator = Random.Random_operator();
	question.innerText = `${left_data} ${operator} ${right_data}?`;
	Quiz(left_data, right_data, operator, Random);
}

function QuizEnd() {
	count = 5;
	next.innerText = `Next`; // 다시 Next로 변경
	next.removeEventListener('click', restartQuiz);
	next.addEventListener('click', nextQuiz);
	nextQuiz(); // 새로운 퀴즈 시작
}

buttonClicked(next);
