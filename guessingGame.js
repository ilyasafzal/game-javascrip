// generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// get the guess input and message elements
let guessInput = document.getElementById('guess');
let message = document.getElementById('message');

// function to check the guess
function checkGuess() {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.innerHTML = 'Please enter a valid number between 1 and 100';
  } else if (guess === randomNumber) {
    message.innerHTML = 'Congratulations! You guessed the number!';
  } else if (guess < randomNumber) {
    message.innerHTML = 'Too low, try again';
  } else if (guess > randomNumber) {
    message.innerHTML = 'Too high, try again';
  }
  
  // clear the guess input
  guessInput.value = '';
}
