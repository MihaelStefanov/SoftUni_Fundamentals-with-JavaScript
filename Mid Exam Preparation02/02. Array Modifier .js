function solve(inputArr) {

    let initialArr = inputArr.shift().split(' ').map(Number);

    for (let line of inputArr) {
        let data = line.split(' ');
        let command = data[0];

        if (command == 'swap') {
            let firstNumIdx = data[1];
            let secondNumIdx = data[2];

            let firstNum = initialArr[firstNumIdx];
            let secondNum = initialArr[secondNumIdx];

            initialArr[firstNumIdx] = secondNum;
            initialArr[secondNumIdx] = firstNum

        } else if (command == 'multiply') {
            let firstNumIdx = data[1];
            let secondNumIdx = data[2];

            let firstNum = initialArr[firstNumIdx];
            let secondNum = initialArr[secondNumIdx];

            let multiplySum = firstNum * secondNum;

            initialArr[firstNumIdx] = multiplySum;

        } else if (command == 'decrease') {
            initialArr = initialArr.map(el => el -= 1);

        }

    }

    return initialArr.join(', ');

}


console.log(solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]));