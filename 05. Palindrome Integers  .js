function solve(arr) {
    let res = [];

    for (let idx = 0; idx < arr.length; idx++) {
        let numAsString = arr[idx].toString();

        numAsString = numAsString.split('').reverse().join('');

        if (numAsString == arr[idx]) {
            res.push(`true\n`);
        } else {
            res.push(`false\n`);
        }

    }

    return res.join('');

}

console.log(solve([323, 323, 421, 121]));
