function solve(arrayFirst, arraySecond) {

    for (let i = 0; i < arrayFirst.length; i++) {

        let currentEl = arrayFirst[i];

        if (arraySecond.includes(currentEl)) {
            console.log(currentEl);
            
        }
    }

}


solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);
    
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);
