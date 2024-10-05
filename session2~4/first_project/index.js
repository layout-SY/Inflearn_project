const all = document.getElementById('btn-all');
const breakfast = document.getElementById('btn-breakfast');
const lunch = document.getElementById('btn-lunch');
const shakes = document.getElementById('btn-shakes');
const dinner = document.getElementById('btn-dinner');
const menuItems = document.querySelectorAll('.menu-item');
function btnClickEvent(button_type) {
	menuItems.forEach((category) => {
		if (button_type === all) {
			category.classList.add('show');
		} else {
			if (category.classList.contains(button_type.id)) {
				category.classList.add('show');
			} else {
				category.classList.remove('show');
			}
		}
	});
}

function btnClick(button_type) {
	button_type.addEventListener('click', () => {
		btnClickEvent(button_type);
	});
}

btnClick(all);
btnClick(breakfast);
btnClick(lunch);
btnClick(shakes);
btnClick(dinner);
