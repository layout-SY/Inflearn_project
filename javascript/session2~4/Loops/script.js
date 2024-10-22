for (let i = 0; i < 10; i++) {
	if (i == 3) {
		console.log('It is 3');
		continue;
	}

	if (i == 5) {
		console.log('5 Stop the loop');
		break;
	}
	console.log(`Number ${i}`);
}

const user = {
	name: 'Cho',
	province: '경기도',
	city: '고양시',
};

for (let x in user) {
	console.log(`${x} : ${user[x]}`);
}

let i = 0;

// while (i < 10) {
// 	console.log('number' + i);
// 	i++;
// }

do {
	console.log('Number' + i);
	i++;
} while (i < 10);

const locations = ['서울', '경기', '부산', '대구'];

locations.forEach((value, index, array) => {
	console.log(`${value}, ${index}, ${array}`);
});

locations.map((location) => {
	console.log(location);
});
