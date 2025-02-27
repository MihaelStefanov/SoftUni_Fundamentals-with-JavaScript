function solve(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let charArr = [];

    for (let curChar = startChar + 1; curChar < endChar; curChar++) {
        charArr.push(String.fromCharCode(curChar));

    }

    return charArr.join(' ');

}

console.log(solve('a', 'd'));
