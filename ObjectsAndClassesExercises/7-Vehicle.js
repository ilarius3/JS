class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power}, //умножението ще ги парсне към числа автоматично
        this.fuel = Number(fuel);
    }
    get mode(){
        this.model
    }
    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.model);
console.log(vehicle.parts.quality);
console.log(vehicle.parts.engine * vehicle.parts.power);
