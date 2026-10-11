const readline = require("readline");

const nm = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Check Largest Number!");

nm.question("Enter Your First Number: ", (answer) => {
    const num1 = Number(answer.trim());

    nm.question("Enter Your Second Number: ", (answer) => {
        const num2 = Number(answer.trim());

        if (num1 > num2) {
            console.log(`${num1} is bigger than ${num2}`);
        } else if (num2 > num1) {
            console.log(`${num2} is bigger than ${num1}`);
        } else {
            console.log("Both number are equal");
        }

        nm.close();
    });
});