// 객체 구조 분해 할당
let person = {
	name: 'John',
	age: 30,
	city: 'Seoul',
	address: {
		street: '123 Main St',
		city: 'Seoul',
		number: '234',
	},
};

let {
	address: { street, city },
} = person;

//배열 구조 분해 할당
let a, b, rest;
[a, b] = [10, 20];
[a, b, rest] = [10, 20, 30, 40, 50];

const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const [day1, day2, day3, day4, day5, day6] = week;

const numbers = [1, 2, 3, 4, 5, 6];
const [, , three, , five] = numbers;

const studentDetails = {
	firstName: 'John',
	lastName: 'Dae',
};

const { firstName: fName = 'not given', lastName } = studentDetails;
console.log(fName);
console.log(lastName);

var people = [
	{
		name: 'Alice',
		family: {
			mother: 'John',
			father: 'Bob',
			sister: 'Doe',
		},
		age: 15,
	},
	{
		name: 'John',
		family: {
			mother: 'Alice',
			father: 'afe',
			sister: 'egseg',
		},
		age: 30,
	},
];

for (var {
	name: n,
	family: { father: f },
} of people) {
	console.log(`Name : ${n}, Father ${f}`);
}
