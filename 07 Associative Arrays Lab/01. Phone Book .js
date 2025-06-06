function solve(inputArr) {
    let phoneBook = {};

    for (let string of inputArr) {
        let [name, number] = string.split(' ');
        phoneBook[name] = number;        
    }
    
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }

}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);