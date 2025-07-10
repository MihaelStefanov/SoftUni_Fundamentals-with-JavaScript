function solve(inputArr) {
    let cars = [];
    let countOfCars = Number(inputArr.shift());

    for (let i = 1; i <= countOfCars; i++) {
        let line = inputArr.shift();

        let [car, mileage, fuel] = line.split('|');

        let newCar = {
            car,
            mileage: +mileage,
            fuel: +fuel
        }        

        cars.push(newCar);
    }


    let line = inputArr.shift();
    while(line != "Stop") {
        let token = line.split(' : ');
        let command = token[0];
        let car = token[1];

        let currentCar = cars.find(x => x.car == car);
      
        switch(command) {
            case 'Drive':
                let distance = Number(token[2]);
                let fuel = Number(token[3]);
                let mileageMax = 100000;

            if (currentCar.fuel < fuel) {
                console.log('Not enough fuel to make that ride');
                break;
            }

            currentCar.fuel -= fuel;
            currentCar.mileage += distance;

            console.log(`${currentCar.car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

            if (currentCar.mileage >= mileageMax) {
                cars.splice(cars.indexOf(currentCar), 1);
                console.log(`Time to sell the ${currentCar.car}!`);   
            }
            break;

            case 'Refuel':
            let tankCapacity = 75;
            let fuelToAdd = Number(token[2]);
            let currentFuel = currentCar.fuel;
            
            if ((currentFuel + fuelToAdd) > tankCapacity) {
                fuelToAdd = tankCapacity - currentFuel;
            } 

            currentCar.fuel += fuelToAdd;
            console.log(`${currentCar.car} refueled with ${fuelToAdd} liters`)
            break;

            case "Revert": 
            let kilometers = Number(token[2]);
            let minimumMileage = 10000;

            currentCar.mileage -= kilometers;
            
            if (currentCar.mileage < minimumMileage) {
                currentCar.mileage = minimumMileage;
                break;
            }

            console.log(`${currentCar.car} mileage decreased by ${kilometers} kilometers`);
            break;
        }

    line = inputArr.shift();
    }


    cars.forEach(car => console.log(`${car.car} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`));

}

solve([ 
  '3', 
  'Audi A6|38000|62', 
  'Mercedes CLS|11000|35', 
  'Volkswagen Passat CC|45678|5', 
  'Drive : Audi A6 : 543 : 47', 
  'Drive : Mercedes CLS : 94 : 11', 
  'Drive : Volkswagen Passat CC : 69 : 8', 
  'Refuel : Audi A6 : 50', 
  'Revert : Mercedes CLS : 500', 
  'Revert : Audi A6 : 30000', 
  'Stop' 
]);

console.log("==============");

solve([ 
  '4', 
  'Lamborghini Veneno|11111|74', 
  'Bugatti Veyron|12345|67', 
  'Koenigsegg CCXR|67890|12', 
  'Aston Martin Valkryie|99900|50', 
  'Drive : Koenigsegg CCXR : 382 : 82', 
  'Drive : Aston Martin Valkryie : 99 : 23', 
  'Drive : Aston Martin Valkryie : 2 : 1', 
  'Refuel : Lamborghini Veneno : 40', 
  'Revert : Bugatti Veyron : 2000', 
  'Stop' 
]);