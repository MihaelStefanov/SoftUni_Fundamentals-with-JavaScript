function solve(inputArr) {
    let pattern = /^%(?<name>[A-Z][a-z]+)%<(?<product>\w+)>\|(?<count>\d+)\|(?<price>\d+(?:\.\d+)?)\$$/;
    let line = inputArr.shift();

    let totalSum = 0;

    while(line !== 'end of shift') {
        let matchLine = line.match(pattern);
        if (matchLine) {
            let sum = 0;
            sum += +matchLine.groups.price * +matchLine.groups.count;
            totalSum += sum;
    
            console.log(`${matchLine.groups.name}: ${matchLine.groups.product} - ${sum.toFixed(2)}`);
        }
        
        line = inputArr.shift();
    }

    console.log(`Total income:`, totalSum.toFixed(2));
    
}

solve(['%George%<Croissant>|2|10.3$', 
'%Peter%<Gum>|1|1.3$', 
'%Maria%<Cola>|1|2.4$', 
'end of shift']);

// solve(['%InvalidName%<Croissant>|2|10.3$', 
// '%Peter%<Gum>1.3$', 
// '%Maria%<Cola>|1|2.4', 
// '%Valid%<Valid>valid|10|valid20$', 
// 'end of shift']);