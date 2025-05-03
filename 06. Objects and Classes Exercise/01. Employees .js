function solve(namesArr) {
    let obj = {};
    
    for (let name of namesArr) {
        obj.name = name;
        obj.number = name.length;
        
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
    }
    
}


solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
console.log('--------');
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);