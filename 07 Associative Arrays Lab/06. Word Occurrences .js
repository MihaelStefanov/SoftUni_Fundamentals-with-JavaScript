function solve(inputArr) {
    let map = new Map();

    inputArr.forEach(word => {
        if (!map.has(word)) {
            map.set(word, 0);
        }
    });

    for (let word of inputArr) {
        for (let [line, value] of Array.from(map)) {
            if (line == word) {
                map.set(line, value + 1);
            }
        }
    }

    let sortedArr = Array.from(map).sort((a, b) => b[1] - a[1]);

    sortedArr.forEach(entry => {
        console.log(entry[0], '->', entry[1], 'times');
    })
    
}


solve(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]);