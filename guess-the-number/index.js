const guessInputField = document.querySelector('#guess');
const submitButton = document.querySelector('.button__submit');
const startGameButton = document.querySelector('.button__start');
const accuracy = document.querySelector('.accuracy');
const guesses = document.querySelector('.guesses');

let guess = []; 

// define random number between 0 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

submitButton.addEventListener('click', () => {
  let currentGuess = parseInt(guessInputField.value);
  guess.push(currentGuess);

  if (currentGuess === randomNumber) {
    accuracy.innerHTML = 'You guessed correctly!';
  } else if (currentGuess < randomNumber) {
    accuracy.innerHTML = 'Your guess is too low';
  } else {
    accuracy.innerHTML = 'Your guess is too high';
  }

  guesses.innerHTML = guess.join(', ');
})


startGameButton.addEventListener('click', () => {
  guess = [];
  accuracy.innerHTML = '';
  guesses.innerHTML = '';
  guessInputField.value = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;
})