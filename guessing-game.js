import compare from '../compare.js';

const triesRemaining = document.getElementById('tries-remaining');
const lowHigh = document.getElementById('low-high');
const result = document.getElementById('result');
const guessButton = document.getElementById('guess-button');
const userInput = document.getElementById('enter-guess');

let tries = 4;
let correct = 12;


guessButton.addEventListener('click', () => {
    tries--;
    triesRemaining.textContent = tries;

    if (compare(Number(userInput.value), correct) === 0) {
        result.textContent = 'win!!!';
        lowHigh.textContent = 'Correct!!';
        guessButton.disabled = true;
    }
    if (compare(Number(userInput.value), correct) === -1) {
        lowHigh.textContent = 'Too low!';
    }
    if (compare(Number(userInput.value), correct) === 1) {
        lowHigh.textContent = 'Too High!';
    }
    if (tries === 0 && compare(Number(userInput.value), correct) !== 0) {
        result.textContent = 'Lost';
    }
});