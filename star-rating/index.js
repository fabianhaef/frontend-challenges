// get all stars  
const stars = document.querySelectorAll('.star');

// get output div
const output = document.querySelector('.output');

// create function to get index position of selected star
const getSelectedStarIndex = (star) => {
  let index = 0;
  while ((star = star.previousElementSibling) != null) {
    index++;
  }
  return index;
}

// create function to update the output
const updateOutput = (index) => {
  output.innerHTML = `You gave  ${index + 1} star${index == 0 ? '' : 's'} Review`;
}


// add event listener to each star
stars.forEach((star) => {
  star.addEventListener('click', () => {
    const index = getSelectedStarIndex(star);
    updateOutput(index);
  });
});