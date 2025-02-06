function solve(start, end) {
    let totalSum = 0;
    let numbers = ''

    for (let i = start; i <= end; i++) {
        totalSum += i;
        numbers += i + ' ';
    }

    console.log(`${numbers}\nSum: ${totalSum}`);
    
}

solve(50, 60);