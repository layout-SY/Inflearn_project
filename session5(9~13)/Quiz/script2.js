const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const next = document.getElementById('next');
const question = document.getElementById('question');

let count = 5;

function buttonClicked(answer, CorrectIndex, failIndex1, failIndex2) {
	//이벤트 중복 발생 => 따라서 초기 next 버튼을 제외한 두 번째 버튼 부턴 2번 중복 돼서 결과 출력
	if (answer.id === next.id) {
		answer.addEventListener('click', () => {
			nextQuiz(answer);
		});
	} else {
		answer.addEventListener('click', (event) => {
			button(event, CorrectIndex);
		});
	}
}

function button(event, CorrectIndex) {
	if (event.target.id === CorrectIndex.id) {
		alert('Correct!');
	} else {
		alert('Wrong!');
	}
	count--;
}

function Quiz(left_data, right_data, operator, Random) {
	const answerArray = [answer1, answer2, answer3];
	const value = Random.Random_number(answerArray.length);

	const failValue1 = Random.Random_operator_selector(left_data + 30, right_data, operator);
	const failValue2 = Random.Random_operator_selector(left_data, right_data - 15, operator);
	const CorrectValue = Random.Random_operator_selector(left_data, right_data, operator);

	const CorrectIndex = answerArray[value];
	CorrectIndex.innerText = CorrectValue;
	answerArray.splice(value, 1);

	const failIndex1 = answerArray[0];
	const failIndex2 = answerArray[1];
	failIndex1.innerText = failValue1;
	failIndex2.innerText = failValue2;

	QuizPlay(CorrectIndex, failIndex1, failIndex2);
}

function QuizPlay(CorrectIndex, failIndex1, failIndex2) {
	buttonClicked(answer1, CorrectIndex, failIndex1, failIndex2);
	buttonClicked(answer2, CorrectIndex, failIndex1, failIndex2);
	buttonClicked(answer3, CorrectIndex, failIndex1, failIndex2);
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
	if (count === 0) {
		QuizEnd();
		return;
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

function QuizEnd() {}

buttonClicked(next);
