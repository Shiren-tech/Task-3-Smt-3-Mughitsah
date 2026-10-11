const readline = require("readline");

const transport = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Parking fee base on hour!")

transport.question("Input total parking time: ", (answer) => {
    const parking = Number(answer.trim());
    let fee;

    if (parking <= 1) {
        fee = 5000;
    } else {
        fee = 5000 + (parking - 1) * 3000;
    }
    
    if (fee > 20000) {
        fee = 20000;
    }

    console.log(`Parking fee: Rp${fee}`);

    transport.close();
});