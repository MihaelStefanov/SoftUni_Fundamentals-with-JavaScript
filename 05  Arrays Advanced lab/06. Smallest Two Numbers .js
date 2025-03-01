function solve(arr) {

    let ascendingArr = arr.sort((a, b) => a - b);
    let firstTwoNums = ascendingArr.slice(0, 2);

    return firstTwoNums.join(' ');

}

console.log(solve([30, 15, 50, 5]));
