function printHeader(inputGrade) {
    let grade = Number(inputGrade);

    if (grade < 3) {
        console.log(`Fail (2)`);
    } else {
        let label = formatGrade(grade);
        console.log(`${label} (${grade.toFixed(2)})`);
    }

}

function formatGrade(grade) {

    if (grade < 3.50) {
        return `Poor`;

    } else if (grade < 4.50) {
        return `Good`;

    } else if (grade < 5.50) {
        return `Very good`;

    } else {
        return `Excellent`;
    }

}


printHeader(2.99)
printHeader(2.99);
printHeader(3);
printHeader(3.50);
printHeader(4.50);
printHeader(5);
printHeader(6);
