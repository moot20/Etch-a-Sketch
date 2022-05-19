const grid = document.getElementById('grid');
const btn16 = document.querySelector('#btn16');
const btn32 = document.querySelector('#btn32');
const btn64 = document.querySelector('#btn64');
const btnBl = document.querySelector('#btnBlack');
const btnSur = document.querySelector('#btnSurprise');
const btnCl = document.querySelector('#btnCl');

let sizeState = 0;
let colorState = 'black';

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

btnBl.onclick = () => setColor('black');
btnSur.onclick = () => setColor('rainbow');
btnCl.onclick = () => clearGrid();

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add("grid-element");
    gridElement.addEventListener('mouseover', colorCell);
    gridElement.addEventListener('mousedown', colorCell);
    grid.appendChild(gridElement);
  }
}

function changeGrid () {
  if (sizeState == 0) {
    setupGrid(16);
  } else if (sizeState == 1) {
    setupGrid(32);
  } else {
    setupGrid(64);
  }
}

function clearGrid () {
  emptyGrid();
  changeGrid();
}

function emptyGrid () {
  grid.innerHTML = ''
}

changeGrid();

btn16.addEventListener('click', () => {
  sizeState = 0;
  clearGrid();
})

btn32.addEventListener('click', () => {
  sizeState = 1;
  clearGrid();
})

btn64.addEventListener('click', () => {
  sizeState = 2;
  clearGrid();
})

function setColor (color) {
  colorState = color;
}

function colorCell (e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (colorState === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (colorState === 'black') {
    e.target.style.backgroundColor = 'black';
  }
}






