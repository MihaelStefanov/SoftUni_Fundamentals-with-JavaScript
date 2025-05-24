function solve(inputArr) {
    let vipGuests = [];
    let regularGuests = [];

    let command = inputArr.shift();

    while (command !== "PARTY") {
        let firstChar = command[0];

        if (isNaN(firstChar)) {
            regularGuests.push(command);
        } else {
            vipGuests.push(command);
        }

        command = inputArr.shift();
    }

    let allGuests = vipGuests.concat(regularGuests);

    for (let guest of inputArr) {
        if (allGuests.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest), 1);
        }
        
    }

    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));

}


solve([
'7IK9Yo0h', 
'9NoBUajQ',
'Ce8vwPmE', 
'SVQXQCbc', 
'tSzE5t0p', 
'PARTY', 
'9NoBUajQ', 
'Ce8vwPmE', 
'SVQXQCbc' 
]);