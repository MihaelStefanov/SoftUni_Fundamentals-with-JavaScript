function solve(inputArr) {
    let pirateShipStatus = inputArr.shift().split('>').map(Number);
    let warshipStatus = inputArr.shift().split('>').map(Number);
    let maximumHealthCapacity = Number(inputArr.shift());

    for (let line of inputArr) {
        line = line.split(' ');
        let action = line.shift();

        if (action == 'Retire') {
            break;
        }

        if (action == 'Fire') {
            let idx = Number(line[0]);
            let damage = Number(line[1]);

            if (idx >= 0 && idx < warshipStatus.length) {
                warshipStatus[idx] -= damage;
                if (warshipStatus[idx] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
            }

        } else if (action == 'Defend') {
            let startIdx = Number(line[0]);
            let endIdx = Number(line[1]);
            let damage = Number(line[2]);

            if (startIdx >= 0 && endIdx < pirateShipStatus.length) {
                for (let i = startIdx; i <= endIdx; i++) {
                    pirateShipStatus[i] -= damage;

                    if (pirateShipStatus[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }
            }

        } else if (action == 'Repair') {
            let idx = Number(line[0]);
            let hp = Number(line[1]);

            pirateShipStatus[idx] += hp;
            if (pirateShipStatus[idx] > maximumHealthCapacity) {
                pirateShipStatus[idx] = maximumHealthCapacity;
            }

        } else if (action == 'Status') {
            let countSectionsNeedRepair = 0;

            for (let section of pirateShipStatus) {
                let sectionHpInPercent = (section / maximumHealthCapacity) * 100;
                if (sectionHpInPercent < 20) {
                    countSectionsNeedRepair++;
                }
            }
            console.log(`${countSectionsNeedRepair} sections need repair.`);
        }

    }


    let pirateShipStatusSum = 0
    pirateShipStatus.forEach(num => pirateShipStatusSum += num);

    let warshipStatusSum = 0;
    warshipStatus.forEach(num => warshipStatusSum += num);

    console.log(`Pirate ship status: ${pirateShipStatusSum}`);
    console.log(`Warship status: ${warshipStatusSum}`);


}

// 90 / 100 Points in Judge


solve(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]);
console.log('------');
solve(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"]);
