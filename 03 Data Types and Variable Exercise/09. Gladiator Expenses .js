function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    
    let totalExpenses = 0;
    let shieldBrakes = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        let curFight = i;

        if (curFight % 2 == 0) {
            totalExpenses += helmetPrice
        }

        if (curFight % 3 == 0) {
            totalExpenses += swordPrice;
        }

        if (curFight % 2 == 0 && curFight % 3 == 0 ) {
            shieldBrakes += 1;
            totalExpenses += shieldPrice 

            if (shieldBrakes % 2 == 0) {
                totalExpenses += armorPrice
            }
        }
        

    }
    
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
    
}

solve(7, 2, 3, 4, 5);