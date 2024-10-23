import React from 'react';

function Total({ totalPrice }) {
	return (
		<div className="text-right mt-8">
			<h2 className="text-2xl font-bold text-gray-700">총 지출 : {totalPrice}원</h2>
		</div>
	);
}

export default Total;
