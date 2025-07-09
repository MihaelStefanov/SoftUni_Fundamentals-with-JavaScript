function solve(inputArr) {
    let target = [];

    let line = inputArr.shift();    
    while (line !== "Sail") {        
        let [town, population, gold] = line.split('||');
        population = +population;
        gold = +gold;

        let currentTown = target.find(x => x.town == town);

        if (!currentTown) {
            let newTown = {
                town,
                population,
                gold
            }
            target.push(newTown)
        } else {
            currentTown.population += population;
            currentTown.gold += gold;
        }
       line = inputArr.shift();
    }        

    line = inputArr.shift();
    while (line !== "End") {
        let token = line.split('=>');
        let event = token[0];
        let town = token[1];
        let population;
        let gold;
        let currentTownIndex;

        let currentTown = target.find(x => x.town == town);
        currentTownIndex = target.indexOf(currentTown);
        
        if (!currentTown) {
            break;
        }
                
        switch (event) {
            case 'Plunder':
                population = Number(token[2]);
                gold = Number(token[3]);              
                
                currentTown.population -= population;
                currentTown.gold -= gold;

                console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                
                if (currentTown.population <= 0 || currentTown.gold <= 0) {
                    target.splice(currentTownIndex, 1);
                    console.log(`${town} has been wiped off the map!`);
                    
                }
                break;

                case 'Prosper':
                    gold = Number(token[2]);
                    
                    if (gold < 0) {
                        console.log(`Gold added cannot be a negative number!`);
                    } else {
                        currentTown.gold += gold;
                        console.log(`${gold} gold added to the city treasury. ${town} now has ${currentTown.gold} gold.`);
                    }
                    break;
            }
            
        line = inputArr.shift();
        }


    console.log(`Ahoy, Captain! There are ${target.length} wealthy settlements to go to:`);
    target.forEach(town => console.log(`${town.town} -> Population: ${town.population} citizens, Gold: ${town.gold} kg`));


}


solve(["Tortuga||345000||1250", 
"Santo Domingo||240000||630", 
"Havana||410000||1100", 
"Sail", 
"Plunder=>Tortuga=>75000=>380", 
"Prosper=>Santo Domingo=>180", 
"End"]);

console.log('-------------');

solve((["Nassau||95000||1000", 
"San Juan||930000||1250", 
"Campeche||270000||690", 
"Port Royal||320000||1000", 
"Port Royal||100000||2000", 
"Sail", 
"Prosper=>Port Royal=>-200", 
"Plunder=>Nassau=>94000=>750", 
"Plunder=>Nassau=>1000=>150", 
"Plunder=>Campeche=>150000=>690", 
"End"]));
