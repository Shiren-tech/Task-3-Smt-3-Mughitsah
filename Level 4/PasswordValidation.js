const readline = require("readline");

const pw = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Password Validation!")

pw.question("Create New Password: ", (answer) => {
    const password = answer.trim();

    if (password.length < 8) {
        console.log("Your Password Too Short");
    } else if (password.length <= 11) {
        console.log("Your Password is Moderate");
    } else {
        console.log("Your Password Strong");
    }

    if (/\d/.test(password)) {
        console.log("Password contains a number");
    } else {
        console.log("Password has no number");
    }
    pw.close();
});