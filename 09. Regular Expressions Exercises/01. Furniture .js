function solve(inputArr) {
    let pattern = />>(?<item>\w+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/;
    let totalSum = 0;

    console.log('Bought furniture:');
    

    for (let line of inputArr) {
        let result = line.match(pattern);
        
        if (result) {
            let item = result.groups.item;
            let price = +result.groups.price;
            let quantity = +result.groups.quantity;

            totalSum += price * quantity;
            console.log(item);
            
        }

    }

    console.log(`Total money spend:`, totalSum.toFixed(2));
    
}

solve(['>>Sofa<<312.23!3', 
'>>TV<<300!5', 
'>Invalid<<!5', 
'Purchase']);