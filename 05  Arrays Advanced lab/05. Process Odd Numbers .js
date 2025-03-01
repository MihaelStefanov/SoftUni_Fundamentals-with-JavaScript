function solve(arr) {


    let resArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            let curNum = arr[i];
            curNum *= 2;
            resArr.unshift(curNum);
        }

    }

    return resArr.join(' ');

}


function solve2(arr) {
    let oddIdxNumsByTwoReversArr = arr.filter((num, idx) => idx % 2 !== 0)
        .map(a => a * 2)
        .reverse()

    return oddIdxNumsByTwoReversArr.join(' ');

}


console.log(solve([3, 0, 0, 4, 7, 3]));

console.log(solve2([3, 0, 0, 4, 7, 3]));