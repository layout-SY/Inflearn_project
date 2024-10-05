let val;

val = document.baseURI; //현재 절대 경로 반환
val = document.head; //<head> 태그 반환</head>
val = document.body; //<body> 태그 반환</body>

val = document.forms; //<form> 태그 반환</form>

val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;

val = document.scripts; //코드에서 보이는 것보다 더 많이 생길 수 있음(시스템 상 등)

val = document.scripts[0].getAttribute('src'); // <script 태그의 src 속성 반환></script>
// console.log(val);

const headerContainer = document.getElementById('header-container');
//headerContainer.style.display = 'none'

headerContainer.innerContent = 'Text Content';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span style="color:blue">Inner HTML</span>';

const items = document.getElementsByClassName('list-group-item');
// console.log(items);

items[0].style.color = 'blue';
items[3].textContent = 'Hi';

let list = document.getElementsByTagName('li');
console.log(list);

list = Array.from(list);
console.log(list);

list.forEach((list, index) => {
	list.textContent = `${index} : List`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach((list) => {
	list.style.background = 'grey';
});
