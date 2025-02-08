function solve(num) {
    let numStr = num.toString();
    let sum = 0;

    for (const curNum of numStr) {
        sum += Number(curNum);
    }

    let result = sum.toString().includes('9');
    console.log(result?
        `${num} Amazing? True` :
        `${num} Amazing? False`
    );
    
}

solve(1233)
solve(1313)
solve(999)