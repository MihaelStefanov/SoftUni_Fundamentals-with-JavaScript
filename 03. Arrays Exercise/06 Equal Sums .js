function solve(arr) {

    let leftSum = 0;
    let rightSum = 0;

    let isEqual = false;

    for (let index = 0; index < arr.length; index++) {
        for (let i = 0; i < arr.length; i++) {

            if (i !== index) {
                let num = Number(arr[i]);
                if (i < index) {
                    leftSum += num;
                } else if (i > index) {
                    rightSum += num;
                }
            }

            if (index == 0) {
                leftSum = 0;
            } else if (index == arr.length - 1) {
                rightSum = 0;
            }
        }

        if (leftSum == rightSum) {
            console.log(index);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }

    if (!isEqual) {
        console.log('no');
    }



}

solve([1, 2, 3, 3]);