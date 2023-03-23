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

const logo = document.querySelector('img');
const link = document.querySelector('.outer-link');
const heading = document.querySelector('#app-title');

const onDrag = (e) => {
	heading.innerText = `X ${e.clientX} Y ${e.clientY}`;
};

logo.addEventListener('drag', onDrag);

link.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('Action stopped');
});

const onClick = (e) => {
	// console.log(e.target);
	// console.log(e.currentTarget);
	// e.target.style.backgroundColor = 'black';
	// console.log(e.type);
	// console.log(e.timeStamp);
	// console.log(e.clientX, e.clientY);
	// console.log(e.offsetX, e.offsetY);
	// console.log(e.pageX, e.pageY);
	console.log(e.screenX, e.screenY);
};

logo.addEventListener('click', onClick);

// document.body.addEventListener('click', function (e) {
// 	console.log(e.target);
// 	console.log(e.currentTarget);
// });
