function solve(inputArr) {
    let map = new Map();

    let wordsToCheck = inputArr.shift().split(' ');

    wordsToCheck.forEach(word => {
        map.set(word, 0);
    });

    for (let line of inputArr) {
        for (let word of wordsToCheck) {

            if (line == word) {
                let currentQty = map.get(line);
                map.set(line, currentQty += 1);
            }

        }

    }

    let sortedArr = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

    sortedArr.forEach(entry => {
        console.log(`${entry[0]} - ${entry[1]}`);
    });

}


solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
console.log('---------');
solve([ 
    'is the',  
    'first', 'sentence', 'Here', 'is', 
    'another', 'the', 'And', 'finally', 'the', 
    'the', 'sentence'] );