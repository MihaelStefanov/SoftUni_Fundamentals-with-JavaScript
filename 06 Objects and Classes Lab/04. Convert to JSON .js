function solve(name, lastName, hairColor) {
    let personObj = {
        name,
        lastName,
        hairColor
    }
    console.log(JSON.stringify(personObj));
}

solve('George', 'Jones', 'Brown');
console.log("--------");
solve('Peter', 'Smith', 'Blond');