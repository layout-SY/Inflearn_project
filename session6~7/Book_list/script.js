const bookForm = document.getElementById('book-form');
const input_author = document.getElementById('author');
const input_book_title = document.getElementById('book-title');
const tbody = document.getElementById('book-list');
const add_message = document.querySelector('.add-message');
const delete_message = document.querySelector('.delete-message');

bookForm.addEventListener('submit', handleTodoSubmit);

function handleTodoSubmit(e) {
	e.preventDefault();
	const book_title = input_book_title.value;
	const author = input_author.value;
	const input_value = {
		book_title: book_title,
		author: author,
	};
	paintBook_list(input_value);
}

function paintBook_list(book_data) {
	const tr = document.createElement('tr');
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	const td3 = document.createElement('td');
	td1.innerText = book_data.book_title;
	td2.innerText = book_data.author;
	tr.appendChild(td1);
	tr.appendChild(td2);

	const button = document.createElement('button');
	button.addEventListener('click', deleteBook_list);
	button.innerText = '❌';
	button.classList.add('delete-btn');
	td3.appendChild(button);
	tr.appendChild(td3);
	tbody.appendChild(tr);

	showMessage(add_message);

	input_book_title.value = '';
	input_author.value = '';
}

function deleteBook_list(e) {
	e.target.closest('tr').remove(); // 가장 가까운 <tr> 요소 삭제
	showMessage(delete_message);
}

function showMessage(messageElement) {
	messageElement.classList.remove('hide');
	setTimeout(() => {
		messageElement.classList.add('hide');
	}, 2000);
}
