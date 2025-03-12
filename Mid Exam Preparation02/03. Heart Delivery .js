function solve(inputArr) {
    let neighborhoodArr = inputArr.shift().split('@').map(Number);

    let lastPlaceIdx = 0

    let valentineDaysCheck = [];

    let result = [];

    for (let line of inputArr) {
        let data = line.split(' ');
        let action = data[0];

        if (action == 'Love!') {

            if (neighborhoodArr.length - valentineDaysCheck.length > 0) {
                result.push(`Cupid's last position was ${lastPlaceIdx}.`);
                result.push(`Cupid has failed ${neighborhoodArr.length - valentineDaysCheck.length} places.`);
                
            } else {
                result.push('Mission was successful.');

            }
        }

        if (action = 'Jump') {
            let jumpIdx = Number(data[1]);
            let newJumpIdx = lastPlaceIdx + jumpIdx;

            if (newJumpIdx >= neighborhoodArr.length) {
                newJumpIdx = 0;

                neighborhoodArr[newJumpIdx] -= 2;
                lastPlaceIdx = newJumpIdx;
            } else {

                neighborhoodArr[newJumpIdx] -= 2;
                lastPlaceIdx = newJumpIdx;
            }

            if (neighborhoodArr[newJumpIdx] <= 0) {


                if (valentineDaysCheck.includes(newJumpIdx)) {
                    result.push(`Place ${newJumpIdx} already had Valentine's day.`)
                   
                } else {
                    result.push(`Place ${newJumpIdx} has Valentine's day.`);
                    valentineDaysCheck.push(newJumpIdx);

                }


            }

        }


    }

    console.log(result.join('\n'));

}

// 80 / 100 Points in Judge;


// solve((["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]));

// solve((["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]));

// solve(['1@1@1',
//     'Jump 0',
//     'Jump 1',
//     'Jump 1',
//     'Love!']);
