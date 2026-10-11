const readline =  require("readline");

const secret = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Simple Login!");

secret.question("Enter Username: ", (answer) => {
    const login = answer.trim();

    secret.question("Enter Password: ", (answer) => {
        const password = answer.trim();

        if (login === "admin" && password === "12345" ) {
            console.log("Login Successful");
        } else if (login !== "admin" && password !== "12345") {
            console.log("Username and Password Incorrect");
        } else if (login != "admin") {
            console.log("Username Incorrect");
        } else {
            console.log("Password Incorrect")
        }

        secret.close();
    });
});