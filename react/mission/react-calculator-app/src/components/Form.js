import { React, useEffect } from 'react';

function Form({
	calculateItem,
	setCalculateItem,
	title,
	setTitle,
	value,
	setValue,
	btnValue,
	setBtnValue,
	setTotalPrice,
}) {
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleValueChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setCalculateItem((prev) => {
			const found = prev.find((data) => data.title === title);

			if (found) {
				setBtnValue('제출');

				return prev.map((data) => {
					if (data.title === title) {
						return { ...data, value: value };
					}
					return data;
				});
			} else {
				let newCalculateItem = {
					id: Date.now(),
					title: title,
					value: value,
				};

				return [...prev, newCalculateItem];
			}
		});

		setTitle('');
		setValue(0);
	};

	useEffect(() => {
		setTotalPrice(countTotalPrice());
	}, [calculateItem]);

	const countTotalPrice = () => {
		let price = 0;
		calculateItem.forEach((item) => {
			price += parseInt(item.value);
		});

		return price;
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="grid grid-cols-12 gap-4 p-4">
				<div className="col-span-6">
					<h3 className="text-lg font-semibold text-yellow-500 mb-2">지출 항목</h3>
					<input
						type="text"
						className="w-full p-2 border-b-2 border-yellow-300 focus:border-yellow-500 focus:outline-none"
						placeholder="예) 렌트비"
						value={title}
						onChange={handleTitleChange}
					/>
				</div>
				<div className="col-span-6">
					<h3 className="text-lg font-semibold text-yellow-500 mb-2">비용</h3>
					<input
						type="text"
						className="w-full p-2 border-b-2 border-yellow-300 focus:border-yellow-500 focus:outline-none"
						placeholder="0"
						value={value}
						onChange={handleValueChange}
					/>
				</div>
				<div className="col-span-12 flex justify-start mt-4">
					<button
						type="submit"
						className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
					>
						{btnValue}
					</button>
				</div>
			</div>
		</form>
	);
}

export default Form;
