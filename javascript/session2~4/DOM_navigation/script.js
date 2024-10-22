let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);

val = list.childNodes; // NodeList 반환, list break도 포함 O(text)
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeName;
val = list.childNodes[3].nodeType;
/* NodeType
 * 1 - Element
 * 2 - Attribute (deprecated)
 * 3 - Text node
 * 8 - Comment(주석) node
 * 9 - Document 자체
 * 10 - Doctype
 */
//children element nodes 반환
val = list.children; // HTML Collection 반환 (line break 포함 X)
val = list.children[0];
list.children[1].textContent = 'Hil';

/// First child
val = list.firstChild; // list.firstChild === list.childNodes[0]
val = list.firstElementChild; // 위에 꺼와 차이점은 text(list break 포함 X)

val = list.lastChild;
//list.lastChild === list.children[list.childNodes.length-1]

val = list.lastElementChild;

// child 요소 count
val = list.childElementCount;

// parent node 반환
val = listItem.parentNode; // 상위 node
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// next sibling 반환
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.previousElementSibling;

// previous sibling 반환
val = listItem.previousSibling;
val = listItem.previousElementSibling;

/*
 *자식 노드 : 바로 아래의 자식 요소 나타냄
 * 후손 노드 : 중첩 관계에 있는 모든 요소를 의미(자식 노드와 그 보다 자식 노드 모두가 후손 노드가 됨)
 *
 * 모든 노드에 적용 가능한 탐색 프로퍼티
 *
 */

console.log(list.childNodes.map);
// childNode는 유사 배열이지 배열이 아니기 때문에 배열 관련 메서드를 사용 X
// 대신 for of같은 건 사용 가능
for (let node of list.childNodes) {
	console.log(node);
}

//배열로 만드려면
Array.from(list.childNodes).filter;
console.log('val', val);
