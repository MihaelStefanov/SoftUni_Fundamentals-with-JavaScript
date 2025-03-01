function solve(arr) {

    let sortedArr = arr.sort();
    let result = [];

    for (let i = 0; i < sortedArr.length; i++) {
        result.push(`${i + 1}.${sortedArr[i]}`);
    }

    return result.join('\n');

}


console.log(solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));
