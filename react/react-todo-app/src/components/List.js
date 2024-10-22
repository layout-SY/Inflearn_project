import React from 'react';

import {
	DragDropContext,
	Droppable,
	Draggable
} from 'react-beautiful-dnd';
import Lists from './Lists';

export default function List({ todoData, setTodoData }) {
	const handleEnd = (result) => {
		if (!result.destination) return;
		const newTodoData = [...todoData]; // 상태 불변성을 위해 배열 복사
		const [reorderedItem] = newTodoData.splice(result.source.index, 1);
		newTodoData.splice(result.destination.index, 0, reorderedItem);
		setTodoData(newTodoData);
	};

	return (
		<div>
			<DragDropContext onDragEnd={handleEnd}>
				<Droppable droppableId="todo">
					{(provided) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{todoData.map((data, index) => (
								<Draggable
									key={data.id}
									draggableId={data.id.toString()}
									index={index}
								>
									{(provided, snapshot) => (
										<Lists
											key={data.id}
											id={data.id}
											title={data.title}
											completed={data.completed}
											todoData={todoData}
											setTodoData={setTodoData}
											provided={provided}
											snapshot={snapshot}
										/>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
}