function solve(firstNum, secondNum) {

    function factorial(number) {
        if (number == 0) {
            return 1;
        } else {
            return number * factorial(number - 1)
        }
    }

    let firstNumberFactorial = factorial(firstNum);
    let secondNumberFactorial = factorial(secondNum);

    let ressult = firstNumberFactorial / secondNumberFactorial;

    return ressult.toFixed(2);

}


console.log(solve(5, 2));
