class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = parts.engine * parts.power;

    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }

}


let parts = { engine: 6, power: 320};
let vehicle = new Vehicle('Cabriolet', 'Z4 E89', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

