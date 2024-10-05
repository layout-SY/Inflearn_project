const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// 모두 같은 결과 출력
const arrWrap1 = arr1.concat(arr2, arr3);
const arrWrap2 = [...arr1, ...arr2, ...arr3];
Array.prototype.push.apply(arrWrap1, arrWrap2);
arr1.push(arr2);

const obj1 = {
	a: 'A',
	b: 'B',
	c: 'C',
};

const obj2 = {
	d: 'D',
	e: 'E',
	f: 'F',
};

//둘이 결과값이 다름
const objWarp1 = { obj1, obj2 };
const objWrap2 = { ...obj1, ...obj2 };

const arr = [1, 2, 3];
const arr_a = arr1.reverse();
const arr_b = [...arr1].reverse();
