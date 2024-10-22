import { React, useState } from 'react';

export const Lists = React.memo(
	({
		id,
		title,
		completed,
		todoData,
		setTodoData,
		provided,
		snapshot,
		handleClick
	}) => {
		const handleCompleteChange = (id) => {
			let newTodoData = todoData.map((data) => {
				if (data.id === id) {
					data.completed = !data.completed;
				}
				return data;
			});
			setTodoData(newTodoData);
			localStorage.setItem('todoData', JSON.stringify(newTodoData));
		};

		const handleEditChange = (e) => {
			setEditedTitle(e.target.value);
		};

		const handleSubmit = (e) => {
			e.preventDefault();
			let newTodoData = todoData.map((data) => {
				if (data.id === id) {
					data.title = editedTitle;
				}
				return data;
			});
			setTodoData(newTodoData);
			localStorage.setItem('todoData', JSON.stringify(newTodoData));
		};

		const [isEditing, setIsEditing] = useState(false);
		const [editedTitle, setEditedTitle] = useState(title);

		if (isEditing) {
			return (
				<div
					className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
				>
					<div className="items-center">
						<form onSubmit={handleSubmit}>
							<input
								className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
								value={editedTitle}
								onChange={handleEditChange}
							/>
						</form>
					</div>
					<div className="items-center">
						<button
							onClick={() => setIsEditing(false)}
							className="px-4 py-2 float-right"
						>
							x
						</button>
						<button onClick={() => setIsEditing(true)} type="submit">
							save
						</button>
					</div>
				</div>
			);
		} else {
			return (
				<div
					{...provided.draggableProps}
					ref={provided.innerRef}
					{...provided.dragHandleProps}
					className={`${
						snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'
					} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
				>
					<div className="items-center">
						<input
							type="checkbox"
							checked={completed} // 상태에 따른 체크 여부
							onChange={() => handleCompleteChange(id)}
						/>
						<span className={completed ? 'line-through' : undefined}>
							{title}
						</span>
					</div>
					<div className="items-center">
						<button
							onClick={() => handleClick(id)}
							className="px-4 py-2 float-right"
						>
							x
						</button>
						<button
							onClick={() => setIsEditing(true)}
							onSubmit={handleSubmit}
							className="px-4 py-2 float-right"
						>
							x
						</button>
					</div>
				</div>
			);
		}
	}
);

export default Lists;
