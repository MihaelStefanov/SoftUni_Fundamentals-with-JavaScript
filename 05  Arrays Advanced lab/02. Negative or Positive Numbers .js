function solve(arr) {
    arr = arr.map(Number);

    let ressultArr = [];

    for (const num of arr) {

        if (num < 0) {
            ressultArr.unshift(num);
        } else {
            ressultArr.push(num);
        }

    }

    return ressultArr.join('\n');

}


console.log(solve(['7', '-2', '8', '9']));

