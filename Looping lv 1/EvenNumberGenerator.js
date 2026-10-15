let evenNumber = 0;
let totalEvenNumber = 0;


for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
        
        evenNumber ++;
        totalEvenNumber = totalEvenNumber + i;
    };
}

console.log(`The Number of Even Number: ${evenNumber}`);
console.log(`Rhe Total of Even Number: ${totalEvenNumber}`);