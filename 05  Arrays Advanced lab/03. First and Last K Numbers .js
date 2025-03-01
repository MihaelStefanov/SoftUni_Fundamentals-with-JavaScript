function solve(arr) {

    let numK = arr.shift();

    let firstK = arr.slice(0, numK)
    let lastK = arr.slice(arr.length - numK);

    return `${firstK.join(' ')}\n${lastK.join(' ')}`

}

console.log(solve([2, 7, 8, 9]));
