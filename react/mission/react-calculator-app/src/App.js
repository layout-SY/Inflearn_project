import { React, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import Total from './components/Total';

function App() {
	let [calculateItem, setCalculateItem] = useState([]);
	let [title, setTitle] = useState('');
	let [value, setValue] = useState(0);
	let [btnValue, setBtnValue] = useState('제출');
	let [totalPrice, setTotalPrice] = useState(0);

	return (
		<div className="bg-yellow-100 h-screen flex justify-center items-center">
			<div className="container w-2/3 p-8 bg-white shadow-md rounded-md">
				<div className="title text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-700">예산 계산기</h1>
				</div>
				<Form
					calculateItem={calculateItem}
					setCalculateItem={setCalculateItem}
					title={title}
					setTitle={setTitle}
					value={value}
					setValue={setValue}
					btnValue={btnValue}
					setBtnValue={setBtnValue}
					setTotalPrice={setTotalPrice}
				/>
				<List
					calculateItem={calculateItem}
					setCalculateItem={setCalculateItem}
					title={title}
					setTitle={setTitle}
					value={value}
					setValue={setValue}
					setBtnValue={setBtnValue}
				/>
				<Total totalPrice={totalPrice} />
			</div>
		</div>
	);
}

export default App;
