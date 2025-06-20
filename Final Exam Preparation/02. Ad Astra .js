function solve(input) {
    let data = input.shift();
    let pattern = /([#]|[|])(?<product>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/g;

    let calories = 0;
    let buff = "";
    
    let match = pattern.exec(data);

    while(match) {
        let product = match.groups['product'];
        let date = match.groups['date'];
        let cal = Number(match.groups['calories']);   
        calories += cal;
        
        buff += `Item: ${product}, Best before: ${date}, Nutrition: ${cal}\n`;
        
        match = pattern.exec(data);
    }

    let days = Math.floor(calories / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    console.log(buff);
    
}

solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);