function solve(arr) {

    let modifiedArr = [];
    let rowSum = 0;
    let newSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];

        rowSum += curNum

        if (curNum % 2 == 0) {
           curNum = curNum + i;

        } else {
            curNum = curNum - i
           
        }

        newSum += curNum
        modifiedArr.push(curNum)

    }

    console.log(`[ ${modifiedArr.join(', ')} ]\n${rowSum}\n${newSum}`);

}


solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]); 