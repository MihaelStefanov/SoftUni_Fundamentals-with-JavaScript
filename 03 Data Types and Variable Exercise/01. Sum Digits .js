function solve(num) {
    let numStr = num.toString(); 
    let sum = 0;

    for (const curNum of numStr) {
        sum += Number(curNum);
    }

    console.log(sum);
    
}

solve(543);