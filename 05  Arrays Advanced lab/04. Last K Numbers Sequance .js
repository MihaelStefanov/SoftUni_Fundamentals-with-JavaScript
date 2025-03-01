function solve(n, k) {

    let arr = [1];

    while (n > arr.length) {
        let arrK = arr.slice(-k);
        let sum = 0;

        for (let i = 0; i < arrK.length; i++) {
            sum += arrK[i];
        }
        arr.push(sum);
    }

    return arr.join(' ');

}

console.log(solve(6, 3));
