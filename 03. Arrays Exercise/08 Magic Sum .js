function solve(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            let prevNum = arr[i - 1];

            for (let j = i; j < arr.length; j++) {
                let currentNum = arr[j];
                let sum = currentNum + prevNum;

                if (sum == num) {
                    console.log(prevNum, currentNum);
                }

            }

        }

    }

}


solve([14, 20, 60, 13, 7, 19, 8], 27);