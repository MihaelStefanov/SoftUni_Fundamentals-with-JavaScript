function solve(town, population, area) {
    let isTrue = true;

    if (town.length < 3) {
        console.log("Town name must be at least 3 characters!");
        isTrue = false
    } 

    if (population < 0) {
        console.log(`Population must be a positive number!`);
        isTrue = false
    } 

    if (area < 0) {
        console.log(`Area must be a positive number!`);
        isTrue = false
    }

    if (isTrue){
        console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
    }

}

solve("Ruse", 135570, 412);