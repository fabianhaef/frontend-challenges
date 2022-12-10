const score = document.querySelector('.score');
const maxScore = document.querySelector('.max-score');
const grid = document.querySelector('.grid');

let currentScore = 0
let currentMaxScore = 0;
const currentStartingSize = 0;

const createGrid = (totalCols, totalRows) => {
  for (let i = 0; i < totalCols * totalRows; i++) {
    const div = document.createElement('div');
    div.classList.add('grid__element');
    grid.appendChild(div);
  }
}

const updateScore = (score) => {
  if (currentScore > currentMaxScore) {
    currentMaxScore = currentScore;
    maxScore.innerHTML = "Current MaxScore: " + currentMaxScore;
  }
  score.innerHTML = currentScore;
}

const colorGridElements = (gridElements) => {
  const color = getRandomColor();

  gridElements.forEach((element) => {
    element.style.backgroundColor = color;
  });

  const randomElement = gridElements[Math.floor(Math.random() * gridElements.length)];
  randomElement.classList.add('grid__element--active');
  randomElement.style.backgroundColor = lightenColor(color, 5);
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const run = () => {
  createGrid(10, 10);

  const gridElements = document.querySelectorAll('.grid__element');
  colorGridElements(gridElements);

  gridElements.forEach((gridElement) => {

    gridElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('grid__element--active')) {
        currentScore++;
        updateScore(score);
        colorGridElements(document.querySelectorAll('.grid__element'));
      } else {
        gridElements.backgroundColor = "red";

        setTimeout(() => {

        }, 2000 )
        currentScore = 0;
        updateScore(score);
        createGrid();
      }
    });
    }
  );

}

const lightenColor = (color, percent) => {
  let num = parseInt(color.slice(1),16),
  amt = Math.round(2.55 * percent),
  R = (num >> 16) + amt,
  G = (num >> 8 & 0x00FF) + amt,
  B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}


run();