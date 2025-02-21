function solve(arr) {

    let result = [];
    let arrLength = arr.length;
    let lastEl = arr[arrLength - 1];

    for (let i = 1; i < arrLength; i++) {
        let curentNum = arr[i - 1];

        let isMax = true;

        for (let j = i; j < arrLength; j++) {
            let nextNum = arr[j];

            if (nextNum >= curentNum) {
                isMax = false;
                break;
            }

        }

        if (isMax) {
            result.push(curentNum);
        }

    }

    result.push(lastEl)
    console.log(result.join(' '))
}


solve([1, 4, 3, 2]);