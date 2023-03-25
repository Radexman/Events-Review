// =================== 01 Event Listeners ================== //

// const clearBtn = document.querySelector('#clear');

// const onClear = () => {
// 	alert('Clear items');
// };

// JavaScript Event Listener

// clearBtn.onclick = function () {
// 	alert('Clear Items');
// };

// addEventListener()

// clearBtn.addEventListener('click', clearBtn);
// clearBtn.addEventListener('click', () => console.log('Clear Itmes'));

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => onClear.click(), 5000);

// const clearButton = document.querySelector('#clear');
// const items = document.querySelectorAll('li');

// const clearItems = () => {
// 	items.forEach((item) => item.remove());
// };

// clearButton.addEventListener('click', clearItems);

// ===================== 02 Mouse Events ==================== //

// const logo = document.querySelector('img');

// const onClick = () => console.log('click event');
// const onDoubleClick = () => console.log('double click event');
// const onRightClick = () => console.log('right click event');
// const onMouseDown = () => console.log('mouse down event');
// const onMouseUp = () => console.log('mouse up enent');
// const onMouseWheel = () => console.log('mouse wheel event');
// const onMouseover = () => console.log('mouse over event');
// const onMouseOut = () => console.log('mouse out event');
// const onDragStart = () => console.log('drag start event');
// const onDrag = () => console.log('drag event');
// const onDragEnd = () => console.log('drag end event');

// // Event Listeners
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);
// logo.addEventListener('wheel', onMouseWheel);
// logo.addEventListener('mouseover', onMouseover);
// logo.addEventListener('mouseout', onMouseOut);
// logo.addEventListener('dragstart', onDragStart);
// logo.addEventListener('drag', onDrag);
// logo.addEventListener('dragend', onDragEnd);

// =================== 03 The Event Object =================== //

// const logo = document.querySelector('img');
// const link = document.querySelector('.outer-link');
// const heading = document.querySelector('#app-title');

// const onDrag = (e) => {
// 	heading.innerText = `X ${e.clientX} Y ${e.clientY}`;
// };

// logo.addEventListener('drag', onDrag);

// link.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log('Action stopped');
// });

// const onClick = (e) => {
// 	// console.log(e.target);
// 	// console.log(e.currentTarget);
// 	// e.target.style.backgroundColor = 'black';
// 	// console.log(e.type);
// 	// console.log(e.timeStamp);
// 	// console.log(e.clientX, e.clientY);
// 	// console.log(e.offsetX, e.offsetY);
// 	// console.log(e.pageX, e.pageY);
// 	console.log(e.screenX, e.screenY);
// };

// logo.addEventListener('click', onClick);

// document.body.addEventListener('click', function (e) {
// 	console.log(e.target);
// 	console.log(e.currentTarget);
// });

// ========== 04 Keyboard Events & Key Properties =========== //

// const itemInput = document.querySelector('#item-input');

// // const onKeyPress = (e) => console.log('keypress');
// // const onKeyUp = (e) => console.log('keyup');
// const onKeyDown = (e) => {
// 	e.preventDefault();
// 	// // key
// 	// if (e.key === 'Enter') {
// 	// 	alert('You Clicked Enter');
// 	// }
// 	// keyCode
// 	if (e.keyCode === 13) {
// 		alert('You pressed Enter');
// 	}
// 	//code
// 	if (e.code === 'Digit1') {
// 		console.log('You pressed number 1');
// 	}

// 	if (e.repeat) {
// 		console.log(`You are holding down ${e.key} key.`);
// 	}

// 	// console.log('Shift ' + e.shiftKey);
// 	// console.log('Control ' + e.ctrlKey);
// 	// console.log('Alt ' + e.altKey);

// 	if (e.shiftKey && e.key === 'K') {
// 		console.log(`You pressed shift + ${e.key} key`);
// 	}
// };

// // itemInput.addEventListener('keypress', onKeyPress);
// // itemInput.addEventListener('keyup', onKeyUp);
// itemInput.addEventListener('keydown', onKeyDown);

// ==================== 05 Input Events ===================== //

// const itemInput = document.querySelector('#item-input');
// const priorityInput = document.querySelector('#priority-input');
// const checkbox = document.querySelector('#checkbox');
// const heading = document.querySelector('h1');

// const onInput = (e) => {
// 	heading.innerText = e.target.value;
// };

// const onChecked = (e) => {
// 	heading.innerText = e.target.checked ? 'Checked' : 'Unchecked';
// };

// const onFocus = (e) => {
// 	e.target.style.outline = '1px solid green';
// };

// const onBlur = (e) => {
// 	e.target.style.outline = 'none';
// };

// itemInput.addEventListener('input', onInput);
// priorityInput.addEventListener('change', onInput);
// checkbox.addEventListener('input', onChecked);
// itemInput.addEventListener('focus', onFocus);
// itemInput.addEventListener('blur', onBlur);

// ========= 06 Form Submission & FormData Object  =========== //

// const form = document.querySelector('#item-form');

// const onSubmit = (e) => {
// 	e.preventDefault();
// 	const item = document.querySelector('#item-input').value;
// 	const priorityInput = document.querySelector('#priority-input').value;
// 	if (item === '' || priorityInput === '0') {
// 		alert('Please fill the input');
// 		return;
// 	}
// 	console.log(item, priorityInput);
// };

// const onSubmitTwo = (e) => {
// 	e.preventDefault();
// 	const formData = new FormData(form);
// 	const item = formData.get('item');
// 	const priority = formData.get('priority');

// 	const entries = formData.entries();
// 	for (const entry of entries) {
// 		console.log(entry[1]);
// 	}
// };

// form.addEventListener('submit', onSubmitTwo);

// ================== 07 Event Bubbling  =================== //

// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(2)');
// const form = document.querySelector('form');

// button.addEventListener('click', (e) => {
// 	e.stopPropagation();
// 	alert('The button was clicked');
// });

// div.addEventListener('click', () => {
// 	alert('Div was clicked');
// });

// form.addEventListener('click', () => {
// 	alert('Form was clicked');
// });

// document.body.addEventListener('click', () => {
// 	alert('Body was clicked');
// });

// ========= 08 Event Delegation & Multiple Events =========== //

const items = document.querySelectorAll('.item');
const list = document.querySelector('ul');

const removeItem = (e) => {
	e.target.remove();
};

// items.forEach((item) => {
// 	item.addEventListener('click', removeItem);
// });

list.addEventListener('click', (e) => {
	e.target.className === 'item' ? e.target.remove() : null;
});
