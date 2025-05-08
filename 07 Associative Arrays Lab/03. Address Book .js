function solve(inputArr) {
    let myObj = {};

    for (let data of inputArr) {
        let [name, address] = data.split(':');
        myObj[name] = address;
    }
    
    
    let sorted = Object.keys(myObj).sort((a, b) => a.localeCompare(b))

    for (let key of sorted) {
        console.log(key, '->', myObj[key]);
        
    }

}


solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);