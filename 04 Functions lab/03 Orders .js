function repeatString(str, n) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        result += str
    }
    return result;

}

let resultFromFunction = repeatString("abc", 3);
console.log(resultFromFunction);

let resultFromFunction02 = repeatString("String", 2)
console.log(resultFromFunction02);



