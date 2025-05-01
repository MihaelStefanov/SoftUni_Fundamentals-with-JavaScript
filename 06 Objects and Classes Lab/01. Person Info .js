function solve(firstName, lastName, age) {
    personObj = {
        firstName,
        lastName,
        age
    }
    
    return personObj; 
}

console.log(solve('Peter', 'Pan', '20'));
console.log("---------");
console.log(solve('George', 'Smith', '18'));