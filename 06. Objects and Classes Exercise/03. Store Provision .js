function solve(inputArr1, inputArr2) {
    let storeStorageObj = {};

    for (let i = 0; i < inputArr1.length; i+=2) {
        let product = inputArr1[i];
        let qty = Number(inputArr1[i + 1]);

        storeStorageObj[product] = qty;
    }
    
    for (let i = 0; i < inputArr2.length; i+=2) {
        let product = inputArr2[i];
        let qty = Number(inputArr2[i + 1]);

        if (!storeStorageObj.hasOwnProperty(product)) {
            storeStorageObj[product] = 0;
        }

        storeStorageObj[product] += qty;
        
    }

    for (let productKey in storeStorageObj) {
        console.log(productKey, "->", storeStorageObj[productKey]);
    }

}


solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]);
console.log('-----');
solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14',
    'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7',
    'Tomatoes', '7', 'Bananas', '30'
    ]);
