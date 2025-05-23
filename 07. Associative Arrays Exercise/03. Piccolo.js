function solve(inputArr) {
    parkingArr = [];

    for (let line of inputArr) {
        let [direction, carNumber] = line.split(', ');

        if (!parkingArr.includes(carNumber)) {
          if (direction == 'IN') {
            parkingArr.push(carNumber);
          }
        } else {
            if (direction == 'OUT') {
               let idx = parkingArr.indexOf(carNumber);
                parkingArr.splice(idx, 1);
            }
        }
        
    }


    if (parkingArr.length > 0) {
         parkingArr.sort((a, b) => Number(a.slice(2, -2)) - Number(b.slice(2, -2))).forEach(element => {
            console.log(element);
    });

    } else {
        console.log('Parking Lot is Empty');
    }

}


solve(['IN, CA2844AA', 
'IN, CA1234TA', 
'OUT, CA2844AA', 
'IN, CA9999TT', 
'IN, CA2866HI', 
'OUT, CA1234TA', 
'IN, CA2844AA', 
'OUT, CA2866HI', 
'IN, CA9876HH', 
'IN, CA2822UU']);
console.log('---------');
solve(['IN, CA2844AA', 
'IN, CA1234TA', 
'OUT, CA2844AA', 
'OUT, CA1234TA'])


