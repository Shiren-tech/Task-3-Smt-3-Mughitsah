const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Check the number Positive or Negative");

rl.question("Enter Random Number: ", (answer) => {
    const number =  Number(answer.trim());

    if (number > 0) {
        console.log("The Number is Positive");
    } else if (number < 0) {
        console.log("The Number is Negative");
    } else {
        console.log("Zero");
    }

    rl.close();
});