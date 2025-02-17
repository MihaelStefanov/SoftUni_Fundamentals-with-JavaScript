function solve(char) {
    let res = char == char.toUpperCase();
    console.log(res? 'upper-case' : 'lower-case');

}

solve('M');