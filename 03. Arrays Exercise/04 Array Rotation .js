function solve(arr, n) {

    for (let i = 0; i < n; i++) {
        let firstEl = arr.shift();
        arr.push(firstEl);

    }

    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2);