function solve(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    return sortedArr.join('\n');

}


console.log(solve(['alpha', 'beta', 'gamma']));

