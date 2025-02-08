function solve(a, b, c) {
    let sum = a + b + c;
    let isInteger = sum % 1 == 0;

    if (isInteger) {   
        console.log(sum, `- Integer`);
    } else {
        console.log(sum, `- Float`);
    }
    
}

solve(9, 100, 1.1);
solve(100, 200, 303);