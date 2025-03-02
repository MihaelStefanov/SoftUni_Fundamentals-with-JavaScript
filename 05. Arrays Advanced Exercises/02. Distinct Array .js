function solve(arr) {
    let uniqueNumsArr = [];

    for (let CurNum of arr) {
        if (!uniqueNumsArr.includes(CurNum)) {
            uniqueNumsArr.push(CurNum)
        }
    }

    return uniqueNumsArr.join(' ');

}


console.log(solve([7, 8, 9, 7, 2, 3, 4, 1, 2]));