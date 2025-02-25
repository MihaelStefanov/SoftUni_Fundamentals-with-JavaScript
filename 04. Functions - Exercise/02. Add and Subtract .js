function solve(numOne, numTwo, numThree) {

    let sum = (a, b) => a + b;
    let subtract = (res, lastNum) => res - lastNum;

   return subtract(sum(numOne, numTwo), numThree);

}

console.log(solve(23, 6, 10));