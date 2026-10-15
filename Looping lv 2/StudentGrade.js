const readline = require("readline");

const num = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise((resolve) => {
        num.question(question, resolve);
    });
}

async function main() {
    let studentPassed = 0;
    let studentFailed = 0;
    let totalScore = 0;
    let highestScore;
    let lowestScore;

    for (let i = 1; i <= 10; i++) {
        let answer = await ask(`Enter the Student Grade ${i}: `);
        let grade = Number(answer.trim());
        
        totalScore += grade;

        if (grade >= 75) {
            studentPassed++;
        } else {
            studentFailed++;
        }

        if (i === 1) {
            highestScore = grade;
            lowestScore = grade;
        } else {
            if (grade > highestScore) {
                highestScore = grade;
            }

            if (grade < lowestScore) { 
                lowestScore = grade;
            }
        }
    }

    let avr = (totalScore / 10).toFixed(2);

    console.log("\n===== CALCULATION RESULTS =====");
    console.log("Average Score:", avr);
    console.log("Students Passed:", studentPassed);
    console.log("Students Failed:", studentFailed);
    console.log("Highest Score:", highestScore);
    console.log("Lowest Score:", lowestScore);
    
    num.close();
}

main();