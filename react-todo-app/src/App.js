import React, { Component } from 'react';
import './App.css';

// 여기서 App은 내가 그냥 생성한 클래스임. 어색하다고 본질을 헷갈리지 말자.
// 즉, render()는 Component의 메서드이고, App이 해당 메서드를 상속 받아 사용
export default class App extends Component {
	btnStyle = {
		color: '#fff',
		border: 'none',
		padding: '5px 9px',
		borderRadius: '50%',
		cursor: 'pointer',
		float: 'right',
	};

	getStyle = () => {
		return {
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			TextDecoration: 'none',
		};
	};

	todoData = [
		{
			id: '1',
			title: '공부하기',
			completed: false,
		},
		{
			id: '2',
			title: '청소하기',
			completed: true,
		},
	];

	render() {
		return (
			<div className="container">
				<div className="todoBlock">
					<div className="title">
						<h1>오늘 할 일</h1>
					</div>
					{this.todoData.map((data, index) => (
						<div style={this.getStyle()}>
							<input type="checkbox" defaultChecked={data.completed} />
							{data.title}
							<button style={this.btnStyle}>x</button>
						</div>
					))}
					<div class="getStyle"></div>
				</div>
			</div>
		);
	}
}
