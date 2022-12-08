const TOTAL_COLS = 8;
const TOTAL_ROWS = 8;
const grid = document.querySelector('.grid');

// Create a grid of 64 divs
for (let i = 0; i < TOTAL_COLS * TOTAL_ROWS; i++) {
  const div = document.createElement('div');
  div.classList.add('grid__element');
  grid.appendChild(div);
}

const colorDivs = document.querySelectorAll('.color');
const gridElements = document.querySelectorAll('.grid__element');
let currentColor = 'black';


// get backgroundColor style property of clicked element
const getBackgroundColor = (element) => {
  const style = window.getComputedStyle(element);
  return style.getPropertyValue('background-color');
}

// set backgroundColor style property of clicked element
const setBackgroundColor = (element, color) => {
  element.style.backgroundColor = color;
}

colorDivs.forEach((div) => {
  div.addEventListener('click', (e) => {
    currentColor = getBackgroundColor(e.target);
  });
});


gridElements.forEach((element) => {
  console.log(element);
  element.addEventListener('click', (e) => {
    setBackgroundColor(e.target, currentColor);
  });
});
  