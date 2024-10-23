import React from 'react';

function List({ calculateItem, setCalculateItem, title, setTitle, value, setValue, setBtnValue }) {
	const handleUpdate = (data) => {
		setTitle(data.title);
		setValue(data.value);
		setBtnValue('수정');
	};

	const handleDelete = (data) => {
		let newCalculateItem = calculateItem.filter((item) => item.id !== data.id);
		setCalculateItem(newCalculateItem);
	};
	return (
		<div className="space-y-4">
			{calculateItem.map((data) => {
				return (
					<div
						key={data.id}
						className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md"
					>
						<div className="w-1/2">
							<span className="text-lg font-medium text-gray-800">{data.title}</span>
						</div>

						<div className="w-1/4 text-right">
							<span className="text-lg font-medium text-gray-800">{data.value}</span>
						</div>

						<div className="flex space-x-2">
							<button
								className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition duration-200"
								onClick={() => handleUpdate(data)}
							>
								수정
							</button>
							<button
								className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200"
								onClick={() => handleDelete(data)}
							>
								삭제
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default List;
