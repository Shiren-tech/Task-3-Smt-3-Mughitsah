const readline =  require("readline");

const ages = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Check Age Category!");

ages.question("Enter your age: ", (answer) => {
    const age = Number(answer.trim());

    if (Number.isNaN(age) || !Number.isInteger(age) || age < 0) {
        console.log("Invalid Age");
    } else if (age <= 5) {
        console.log("Toddler");
    } else if (age <= 12) {
        console.log("Child");
    } else if (age <= 17) {
        console.log("Teenager");
    } else if (age <= 59) {
        console.log("Adult");
    } else {
        console.log("Senior");
    };

    ages.close();
});