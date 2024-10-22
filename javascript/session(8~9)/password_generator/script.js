const password_length = document.getElementById('password-length');
const generate_btn = document.getElementById('generate-btn');
const generated_password = document.querySelector('.generated-password');

function CreatePassword(random_password) {
	const data = random_password;
	generated_password.innerText = data;
}

function buttonClicked() {
	generate_btn.addEventListener('click', checkboxCheck);
}

function Random(checkboxArray) {
	let characters = '';
	let random_password = '';
	checkboxArray.forEach((isChecked) => {
		if (isChecked === 'numbers') characters += '0123456789';
		if (isChecked === 'small_letters') characters += 'abcdefghijklmnopqrstuvwxyz';
		if (isChecked === 'capital_letters') characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		if (isChecked === 'symbols') characters += '@!#$&%';
	});

	for (let i = 0; i < password_length.value; i++) {
		let randomIndex = Math.floor(Math.random() * characters.length);
		random_password += characters[randomIndex];
	}

	CreatePassword(random_password);
}

function checkboxCheck() {
	const numbers = document.getElementById('numbers');
	const small_letters = document.getElementById('small-letters');
	const capital_letters = document.getElementById('capital-letters');
	const symbols = document.getElementById('symbols');

	let checkboxArray = [];

	if (numbers.checked) checkboxArray.push('numbers');
	if (small_letters.checked) checkboxArray.push('small_letters');
	if (capital_letters.checked) checkboxArray.push('capital_letters');
	if (symbols.checked) checkboxArray.push('symbols');
	Random(checkboxArray);
}

buttonClicked();
