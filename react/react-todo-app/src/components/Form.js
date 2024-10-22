import React from 'react';

export default function Form({ setTodoData, value, setValue, todoData }) {
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let newTodo = {
			id: Date.now(),
			title: value,
			completed: false
		};

		setTodoData((prev) => [...prev, newTodo]);
		localStorage.setItem(
			'todoData',
			JSON.stringify([...todoData, newTodo])
		);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit} className="flex scroll-pt-20">
			<input
				type="text"
				name="value"
				className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
				placeholder="해야 할 일을 입력하세요"
				value={value}
				onChange={handleChange}
			/>
			<input
				type="submit"
				value="입력"
				className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
			/>
		</form>
	);
}
