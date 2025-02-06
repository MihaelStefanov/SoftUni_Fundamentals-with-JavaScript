function solve(num) {

    let res = '';

    for (let i = 1; i <= num; i++) {
        
    for (let j = 1; j <= i; j++) {
        res += i + ' ';
    }
    res += '\n'
        
    }

console.log(res);

}

solve(20);