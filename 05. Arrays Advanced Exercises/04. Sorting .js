function solve(inputArr) {
    let sortedArr = inputArr.sort((a, b) => b - a);
    let length = sortedArr.length;

    let ressultArr = [];

    for (let i = 0; i < length; i++) {
        let bigNum = sortedArr.shift();
        let smallNum = sortedArr.pop();

        ressultArr.push(bigNum);
        ressultArr.push(smallNum);

    }

    console.log(ressultArr.join(' '));

}


solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
