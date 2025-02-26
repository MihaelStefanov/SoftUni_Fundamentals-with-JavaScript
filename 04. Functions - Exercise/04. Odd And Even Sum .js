function solve(inputNum) {
    let evenSum = 0;
    let oddSum = 0;

    for (const curEl of inputNum.toString().split('')) {
        let curNum = Number(curEl);

        (curNum % 2 == 0) ? evenSum += curNum : oddSum += curNum;
    }
    
    function prinOutput(evenSum, oddSum) {
        return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    }

    return prinOutput(evenSum, oddSum);
    
}


console.log(solve(1000435));