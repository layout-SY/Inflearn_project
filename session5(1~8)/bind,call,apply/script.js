// // Call();
// const fullName = function (city, country) {
// 	console.log(this.firstName + ' ' + this.lastName, city, country);
// };

// const person1 = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// };
// fullName.call(person1, 'Oslo', 'Norway');
//--------------------------------------------------------

// // Apply() with arguments
// const fullName = function (city, country) {
// 	console.log(`${this.firstName}, ${this.lastName}, ${city}, ${country}`);
// };

// const person1 = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// };

// fullName.apply(person1, ['Oslo', 'Norway']); //인수를 배열로 넣을 수 있다는 차이점만 존재
//--------------------------------------------------------

//bind();
// function func(language) {
// 	if (language === 'kor') {
// 		console.log(`language: ${this.korGreeting}`);
// 	} else {
// 		console.log(`language: ${this.engGreeting}`);
// 	}
// }

// const greeting = {
// 	korGreeting: '안녕 ',
// 	engGreeting: 'Hello ',
// };

// const boundFunc = func.bind(greeting); //bind는 바인딩만 시키지 실행하진 않음. 그래서 변수로 넣어 실행시킴
// boundFunc('kor');
