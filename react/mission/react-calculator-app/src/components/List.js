import React from 'react';

function List({ calculateItem, setCalculateItem, title, setTitle, value, setValue }) {
	return (
		<div>
			{console.log(`calculateItemTitle: ${calculateItem.title}
				title: ${title}
                value: ${value}`)}
		</div>
	);
}

export default List;
