import React, { Component } from 'react';
import './App.css';

// 여기서 App은 내가 그냥 생성한 클래스임. 어색하다고 본질을 헷갈리지 말자.
// 즉, render()는 Component의 메서드이고, App이 해당 메서드를 상속 받아 사용
export default class App extends Component {
	state = {
		int: 1,
		todoData: [
			{
				id: '1',
				title: '공부하기',
				completed: false
			},
			{
				id: '2',
				title: '청소하기',
				completed: true
			}
		],
		value: ''
	};
	btnStyle = {
		color: '#fff',
		border: 'none',
		padding: '5px 9px',
		borderRadius: '50%',
		cursor: 'pointer',
		float: 'right'
	};

	getStyle = (completed) => {
		return {
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			TextDecoration: completed ? 'line-through' : 'none'
		};
	};

	handleClick = (id) => {
		let newTodoData = this.state.todoData.filter(
			(data) => data.id !== data
		);
		this.setState({
			todoData: [...newTodoData]
		});
	};

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		let newTodo = {
			id: Date.now(),
			title: this.state.value,
			completed: false
		};

		this.setState({ todoData: [...this.todoData, newTodo], value: '' });
	};

	handleCompleteChange = (id) => {
		let newTodoData = this.state.todoData.map((data) => {
			if (data.id === id) {
				data.completed = !data.completed;
			}
			return data;
		});
		this.setState({ todoData: newTodoData });
	};

	render() {
		return (
			<div className="container">
				<div className="todoBlock">
					<div className="title">
						<h1>오늘 할 일</h1>
					</div>
					{this.state.todoData.map((data, index) => (
						<div style={this.getStyle(data.completed)} key={data.id}>
							<input
								type="checkbox"
								defaultChecked={data.completed}
								onChange={() => this.handleCompleteChange(data.id)}
							/>
							{data.title}
							<button
								style={this.btnStyle}
								onClick={() => this.handleClick(data.id)}
							>
								x
							</button>
						</div>
					))}

					<form
						style={{ display: 'flex' }}
						onClick={this.handleSubmit}
					>
						<input
							type="text"
							name="value"
							style={{ flex: '10', padding: '5px' }}
							placeholder="해야 할 일을 입력하세요"
							value={this.state.value}
							onChange={this.handleChange}
						/>
						<input
							type="submit"
							value="입력"
							className="btn"
							style={{ flex: '1' }}
						/>
					</form>
					<div class="getStyle"></div>
				</div>
			</div>
		);
	}
}
