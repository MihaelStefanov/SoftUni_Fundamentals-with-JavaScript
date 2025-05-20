function solve(inputArr) {
    myObj = {};

    for (let line of inputArr) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);
        if(!myObj.hasOwnProperty(item)) {
            myObj[item] = 0;
        }
        myObj[item] += quantity;

    }

    for (let item in myObj) {
      console.log(item,'->', myObj[item]);
      
    }

}


solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);