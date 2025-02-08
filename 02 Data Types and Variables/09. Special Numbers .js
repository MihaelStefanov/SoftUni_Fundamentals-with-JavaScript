function solve(num) {

    for (let i = 1; i <= num; i++) {
        let curNum = i;
        let sum = 0;

        while (curNum > 0) {
            sum += curNum % 10;
            curNum = Math.trunc(curNum / 10);
        }

        let isSpecial
        if (sum == 5 || sum == 7 || sum == 11) {
            isSpecial = 'True';
        } else {
            isSpecial = 'False';
        }

        console.log(i, `->`, isSpecial);  
    }

}

solve(15)