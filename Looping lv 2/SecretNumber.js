
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = 37;
let attempts = 0;
let guessedCorrectly = false;

function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    console.log("=== NUMBER GUESSING GAME ===");

    for (let i = 1; i <= 7; i++) {
        const answer = await ask(`Attempt ${i}/7 - Guess the number (1-100): `);
        const guess = Number(answer.trim());

        attempts++;

        if (guess === secretNumber) {
            console.log("Correct! You guessed the secret number.");
            guessedCorrectly = true;
            break;
        } else if (guess > secretNumber) {
            console.log("Too high!");
        } else {
            console.log("Too low!");
        }
    }

    console.log("Total attempts:", attempts);

    if (guessedCorrectly === false) {
        console.log("Game over! The secret number was 37.");
    }

    rl.close();
}

main();