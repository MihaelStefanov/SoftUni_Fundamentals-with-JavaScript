function solve(a, operator, b) {
    
    let result = 0;
    
    if (operator == "+") {
        result += a + b;
    } else if (operator == "-") {
        result += a - b;
    } else if (operator == "*") {
        result += a * b;
    } else if (operator == "/") {
        result += a / b;
    }

    console.log(result.toFixed(2));
    
}

solve(5, '*', 10);