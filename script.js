let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

document.getElementById("guessInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") submitGuess();
});

function submitGuess() {
    if (gameOver) return;

    const input = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsEl = document.getElementById("attempts");

    const guess = parseInt(input.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess < secret) {
        message.textContent = "Too low! Try higher.";
    } else if (guess > secret) {
        message.textContent = "Too high! Try lower.";
    } else {
        message.textContent = `Correct! The number was ${secret}.`;
        gameOver = true;
    }

    attemptsEl.textContent = `Guesses: ${attempts}`;
    input.value = "";
    input.focus();
}

function resetGame() {
    secret = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
}
