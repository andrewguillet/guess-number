// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the player's guess
function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);

  const message = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
  } else if (guess === secretNumber) {
    message.textContent = `Congratulations! You guessed the correct number: ${secretNumber}`;
  } else {
    message.textContent = `Sorry, that's incorrect. Try again!`;
  }
}
