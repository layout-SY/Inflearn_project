// // global this
// let a = 'a';
// console.log(window);

// // Method => object
// const audio = {
//     title: 'a',
//     play() {
//         console.log('play this', this);
//     }
// }

// audio.play();

// audio.stop = function () {
//     console.log('stop this', this)
// }

// audio.stop();
//----------------------------------------------------------------
// //Function => Window Object
// function playAudio() {
// 	console.log(this);
// }

// playAudio();
//----------------------------------------------------------------
// // Constructor Function => {}
// function Audio(title) {
// 	this.title = title;
// 	console.log(this);
// }

// const audio = new Audio('a');
//----------------------------------------------------------------
// //화살표 함수에서 this는 항상 상위 스코프의 this를 가리킴
// const audio = {
// 	title: 'audio',
// 	categories: ['rock', 'pop', 'hiphop', 'jazz'],
// 	displayCategories() {
// 		this.categories.forEach(function (category) {
// 			console.log(`title: ${this.title}, category: ${category}`);
// 		}, this); //=={title:'audio'}
// 		//해당 콜백함수를 화살표 함수로 하면 두 번째 매개변수로 따로 지정하지 않아도 상위 객체를 가리키게 됨
// 	},
// };

// audio.displayCategories();
//----------------------------------------------------------------
// const audio = {
//     title: 'audio',
//     categories: ['rock', 'pop', 'hiphop', 'jazz'],
//     displayCategories() {
//         this.categories.forEach((category) => {
//             console.log(this);
//         });
//     }
// }

// audio.displayCategories();
//------------------------------------------------------------------
