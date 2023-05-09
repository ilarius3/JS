function garage(input) {
    let garages = {};
    for (const str of input) {
      let [garageNum, properties] = str.split(" - ");
      if (!(garageNum in garages)) {
        garages[garageNum] = [];
      }
      let carInfo = properties.split(", ");
      let car = {}; // Създаване на нов обект за всяка кола
      for (const line of carInfo) {
        let [key, value] = line.split(": ");
        car[key] = value;
      }
      garages[garageNum].push(car);
    }
    for (const garageNum in garages) {
      let cars = garages[garageNum];
      console.log(`Garage № ${garageNum}`);
      for (const car of cars) {
        let carInfo = Object.entries(car)
          .map(([key, value]) => `${key} - ${value}`)
          .join(", ");
        console.log(`--- ${carInfo}`);
      }
    }
  }
  garage([
    "1 - color: blue, fuel type: diesel",
    "1 - color: red, manufacture: Audi",
    "2 - fuel type: petrol",
    "4 - color: dark blue, fuel type: diesel, manufacture: Fiat"
  ]);
  
