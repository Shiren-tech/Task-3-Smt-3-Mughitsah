const readline = require("readline");

const num = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Check the number is Even or Odd!");

num.question("Enter Random Number: ", (answer) => {
    const number = Number(answer.trim());

    if (number % 2 === 0) {
        console.log("The Number is Even");
    } else {
        console.log("The Number is Odd");
    };

    num.close();
});