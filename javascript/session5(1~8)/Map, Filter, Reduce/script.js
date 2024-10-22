// Map

const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2);

const map2 = array1.map(
	(item, index, array) => {
		console.log(item, index, array, this);
		return item * 2;
	},
	{ a: 'a' }
);

//Filter 메서드
const words = ['some', 'limit', 'elite', 'exclude', 'descriptive'];
const result = words.filter((word) => word.length > 6);

const result2 = words.filter(
	(word, index, array) => {
		console.log(word, index, array, this);
		return word.length > 6;
	},
	{ a: 'a' }
);

//Reduce 메서드
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
	return accumulator + currentIndex;
});
// accumulator : 누산기,
// currentValue : 현재 값
// currentIndex : 현재 인덱스
// array : 원본 배열
