function solve(arr) {
    arr = arr.map(Number);

    let sum = 0;

    let firstNum = arr.shift();
    let lastNum = arr.pop();

    sum = firstNum + lastNum;
    
    return sum;

}

console.log(solve(['20', 30, 40]));