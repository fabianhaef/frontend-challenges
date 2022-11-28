const score = document.querySelector('.score');
const increment = document.querySelector('.increment')
const incrementInput = document.querySelector('.input__increment')
const plusButton = document.querySelector('.button__plus');
const minusButton = document.querySelector('.button__minus');
const resetButton = document.querySelector('.button__reset');

let count = 0;

score.innerHTML = count;

const getCurrentIncrement = () => {
  return parseInt(incrementInput.value);
}

plusButton.addEventListener('click', () => {
  count += getCurrentIncrement();
  score.innerHTML = parseInt(count);
});

minusButton.addEventListener('click', () => {
  count -= getCurrentIncrement();
  score.innerHTML = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  score.innerHTML = count;
});
