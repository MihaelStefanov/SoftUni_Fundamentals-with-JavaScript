function solve(arrayFirst, arraySecond) {

    let resultArr = [];
    
    for (let i = 0; i < arrayFirst.length; i++) {

        if (i % 2 == 0) {
            resultArr[i] = Number(arrayFirst[i]) + Number(arraySecond[i]);

        } else {
            resultArr[i] = Number(arrayFirst[i] + arraySecond[i]);

        }
    }

    console.log(resultArr.join(' - '));

}


solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);

solve(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44'])