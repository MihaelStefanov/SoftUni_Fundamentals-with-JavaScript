function solve(inputArr) {
    let  treasureChestArr = inputArr.shift().split('|');

    let idx = 0;

    while(inputArr[idx] !== 'Yohoho!') {
        let line = inputArr[idx].split(' ');
        let command = line.shift();

        if (command == 'Loot') {
            for (let item of line) {
               if (!treasureChestArr.includes(item)) {
                treasureChestArr.unshift(item);
               }
                
            }
            
        } else if (command == 'Drop') {
            let itemIdx = Number(line);
            if (treasureChestArr[itemIdx]) {
                let currentItem = treasureChestArr.splice(itemIdx, 1)[0];
                treasureChestArr.push(currentItem);
            }
        
        } else if (command == 'Steal') {
            let count = Number(line);
            let startIdx = treasureChestArr.length - count;
            if (startIdx >= 0) {
               let stolenItemsArr = treasureChestArr.splice(startIdx, count);
                console.log(stolenItemsArr.join(', '));
            }

        }
        
        idx++;
    }
    
    
    if (treasureChestArr.length > 0) {
        let itemsCount = treasureChestArr.length;
        let itemsLengthSum = 0;
        
        for (let item of treasureChestArr) {
            itemsLengthSum += item.length;
        }
    
        let averageTreasureGain = itemsLengthSum / itemsCount;

        return `Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`;

    } else {
        return `Failed treasure hunt.`;

    }
    
}


// 80 / 100 Points in Judge;

console.log(solve((["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"])));
console.log('------');
console.log(solve((["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])));