function solve(inputArr) {
    let ressult = {};

    for (let data of inputArr) {
        let [day, name] = data.split(' ');
        
        if (ressult.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            ressult[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }


    for (let [key, value] of Object.entries(ressult)) {
        console.log(`${key} -> ${value}`);   
    }
    
}


solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);