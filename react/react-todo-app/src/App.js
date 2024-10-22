import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

// 여기서 App은 내가 그냥 생성한 클래스임. 어색하다고 본질을 헷갈리지 말자.
// 즉, render()는 Component의 메서드이고, App이 해당 메서드를 상속 받아 사용
export default function App() {
	const [todoData, setTodoData] = useState([]);
	const [value, setValue] = useState(''); //첫 번째 인수는 변수 이름, 두 번쨰 인수는 State를 정하는 함수

	return (
		<div className="flex items-center justify-center w-screen h-screen bg-blue-300">
			<div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
				<div className="flex justify-between mb-3">
					<h1>오늘 할 일</h1>
				</div>
				<List todoData={todoData} setTodoData={setTodoData} />
				<Form
					setTodoData={setTodoData}
					value={value}
					setValue={setValue}
				/>

				<div class="getStyle"></div>
			</div>
		</div>
	);
}