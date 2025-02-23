function simpleCalculator(numOne, numTwo, operator) {

    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch (operator) {
        case "add": return add(numOne, numTwo);
        case "subtract": return subtract(numOne, numTwo);
        case "multiply": return multiply(numOne, numTwo);
        case "divide": return divide(numOne, numTwo);
    }
    

}

console.log(simpleCalculator(5, 5, 'multiply'));


function simpleCalculator2(numOne, numTwo, operator) {
    let obj = {
        "add": (a, b) => a + b,
        "subtract": (a, b) => a - b,
        "multiply": (a, b) => a * b,
        "divide": (a, b) => a / b
    }

    return obj[operator](numOne, numTwo);

}

console.log(simpleCalculator2(10, 5, 'add'));
