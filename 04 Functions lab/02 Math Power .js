function mathPow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
       result = multiplyTwoNumbers(result, x);
    }
    console.log(result);
    
}

function multiplyTwoNumbers(a, b) {
    return a * b;
}

mathPow(2, 8)
mathPow(3, 4)