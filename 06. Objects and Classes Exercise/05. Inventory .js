function solve(inputArr) {
    let heroesArr = [];

    for (let line of inputArr) {
        let [hero, level, items] = line.split(' / ');

        let heroObj = {
            hero,
            level,
            items
        }
        heroesArr.push(heroObj)

    }

    heroesArr.sort((a, b) => a.level - b.level);

    for (let heroObj of heroesArr) {
        console.log(`Hero: ${heroObj.hero}\nlevel => ${heroObj.level}\nitems => ${heroObj.items}`);
        
    }
    
}


solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
console.log('-------');
solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);
