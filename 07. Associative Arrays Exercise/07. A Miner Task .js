function solve(inputArr) {
    let resourcesObj = {};

    for (let i = 1; i < inputArr.length; i+=2) {
        let resource = inputArr[i-1];
        let quantity = inputArr[i];

        if (!resourcesObj.hasOwnProperty(resource)) {
            resourcesObj[resource] = 0;
        } 

        resourcesObj[resource] += Number(quantity);

    }

    Object.entries(resourcesObj).forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
    
}


solve([ 
'Gold', 
'155', 
'Silver', 
'10', 
'Copper', 
'17'
]);