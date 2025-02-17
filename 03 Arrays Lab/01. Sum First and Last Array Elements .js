function solve(arr) {
    let sum = 0;

    let firstNum = arr.shift();
    let lastNum = arr.pop();

    sum = firstNum + lastNum;

    console.log(sum);
    
}

solve([20, 30, 40]);