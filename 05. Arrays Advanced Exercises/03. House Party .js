function solve(listArr) {

    let partyListArr = [];

    for (let line of listArr) {
        let name = line.split(' ')[0];
        let isGoing = line.split(' ')[2];

        if (isGoing == 'going!') {
            if (partyListArr.includes(name)) {
                console.log(`${name} is already in the list!`);

            } else {
                partyListArr.push(name);

            }

        } else if (isGoing == 'not') {
            if (partyListArr.includes(name)) {
                let nameIdx = partyListArr.indexOf(name);

                if (nameIdx !== -1) {
                    partyListArr.splice(nameIdx, 1);
                }

            } else {
                console.log(`${name} is not in the list!`);
            }
        }

    }

    console.log(partyListArr.join('\n'));

}


solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);