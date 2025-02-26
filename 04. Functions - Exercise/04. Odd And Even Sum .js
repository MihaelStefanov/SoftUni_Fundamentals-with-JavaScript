function solve(inputNum) {
    
    let evenSum = 0;
    let oddSum = 0;

    for (let curNum of inputNum.toString().split('')) {
        curNum = Number(curNum);

        (curNum % 2 == 0) ? evenSum += curNum : oddSum += curNum;
    }
    
    function prinOutput(evenSum, oddSum) {
        return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    }

    return prinOutput(evenSum, oddSum);
    
}


console.log(solve(1000435));
console.log(solve(3495892137259234));
