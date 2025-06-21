function solve(inputArr) {
    let target = [];
    let secondHalfInputIdx;

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
            currentTown.people += population;
            currentTown.gold += gold;
        }
       line = inputArr.shift()
    }

    line = inputArr.shift();
    while (line !== "End") {
        console.log(line);
        let token = inputArr[secondHalfInputIdx].split('=>');
        let event = token[0];
        let town;
        let population;
        let gold;
        let currentTownIndex;

        let currentTown = target.find((x, i) => {
                    if (x.town == town) {
                        currentTownIndex = i;
                        return true;                        
                    }
                    return false;
                });

        switch (event) {
            case 'Plunder':
                if (!currentTown) {
                    break;
                }
                town = token[1];
                population = Number(token[2]);
                gold = Number(token[3]);  
                
                currentTown.population -= population;
                currentTown.gold -= gold;
                if (currentTown.population <= 0 || currentTown.gold <= 0) {
                    target.splice(currentTownIndex, 1);
                }
                break;
                // case 'Prosper':
                //     town = Number(token[1]);
                //     gold = Number(token[2]);


                //     break;
            }

            
        line = inputArr.shift();
        }
        
    console.table(target);
    
    
}

solve(["Tortuga||345000||1250", 
"Santo Domingo||240000||630", 
"Havana||410000||1100", 
"Sail", 
"Plunder=>Tortuga=>75000=>380", 
"Prosper=>Santo Domingo=>180", 
"End"]);