function solve(input) {
    let inputArr = input.split(' ').map(el => el.toLowerCase());

    myObj = {};

    inputArr.forEach(el => {
        if (!myObj.hasOwnProperty(el)) {
            myObj[el] = 0;
        }
    });

    for (let word of inputArr) {
        for (let entryWord in myObj) {
            if (word == entryWord) {
                myObj[entryWord] += 1;
            }
            
        }
        
    }

    sortedArr = Object.entries(myObj).filter(entry => entry[1] % 2 !== 0).sort((a, b) => b[1] - a[1]);


    let ressult = ''

    sortedArr.forEach(entry => {
        ressult += `${entry[0]} `;
    });

    console.log(ressult);
    
}


solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');