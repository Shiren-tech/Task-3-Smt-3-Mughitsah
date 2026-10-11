const readline = require("readline");

const shipping = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Checking Shipping and Membership!")

shipping.question("Input Total Purchase: ", (answer) =>{
    const totalPurchase = Number(answer.trim());

    shipping.question("Do You Have A Membership? (Yes/No): ", (answer) =>{
        const membership = answer.trim().toLowerCase();

        if (totalPurchase >= 100000 || membership === "yes") {
            console.log("You got free shipping!");
        } else {
            console.log("You have to pay shipping fee.");
        }

        shipping.close();
    });
});