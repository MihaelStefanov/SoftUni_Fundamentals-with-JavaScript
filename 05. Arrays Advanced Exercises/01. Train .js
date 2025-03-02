function solve(inputArr) {

    let trainArr = inputArr.shift().split(' ').map(Number);
    let wagonCapacity = Number(inputArr.shift());

    for (let data of inputArr) {
        let command = data.split(' ');

        if (command[0] == 'Add') {
            trainArr.push(Number(command[1]));

        } else {
            for (let wagonIdx = 0; wagonIdx < trainArr.length; wagonIdx++) {
                let peopleCount = Number(command[0]);

                if (wagonCapacity - trainArr[wagonIdx] >= peopleCount) {
                    trainArr[wagonIdx] += peopleCount;
                    break;
                }
            }

        }

    }

    return trainArr.join(' ');

}


console.log(solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']));
