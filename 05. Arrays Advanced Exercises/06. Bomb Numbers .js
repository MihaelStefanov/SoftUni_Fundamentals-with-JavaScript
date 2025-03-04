function solve(inputArr, bombInfo) {
    let specialNum = bombInfo[0];
    let powerNum = bombInfo[1];

    let newArr = inputArr.slice();

    while (newArr.includes(specialNum)) {
        let idx = newArr.indexOf(specialNum);
        let currentNum = newArr[idx];

        if (currentNum == specialNum) {
            let startIdx = Math.max(0, idx - powerNum);
            let count = powerNum * 2 + 1;
            newArr.splice(startIdx, count);
        }

    }

    let sum = 0;
    newArr.forEach(num => sum += num);

    return sum;


}


console.log(solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
