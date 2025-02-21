function solve(arr) {

    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (i > 0) {
            let currentNum = Number(arr[i]);
            let prevNum = Number(arr[i - 1]);

            if (currentNum == prevNum) {
                sequence++;

                if (sequence > maxSequence) {
                    maxSequence = sequence
                    maxSequenceNum = currentNum;
                }
            } else {
                sequence = 1;
            }
        }


    }

    console.log(`${(maxSequenceNum + ' ').repeat(maxSequence)}`);

}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);