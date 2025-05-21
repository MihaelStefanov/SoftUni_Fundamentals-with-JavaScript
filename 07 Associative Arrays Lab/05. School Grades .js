function solve (inputArr) {
    let myObj = {};

    for (let line of inputArr) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        
        if (!myObj.hasOwnProperty(name)) {
            myObj[name] = [];
        }
        myObj[name].push(...grades);
    }

    let sordedNames = Object.keys(myObj).sort();
    
    for (let name of sordedNames) {
        let avg = myObj[name].reduce((a, b) => a + b, 0) / myObj[name].length;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
    
}


solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])

console.log(`-------`);

solve(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);