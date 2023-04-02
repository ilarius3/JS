function piccolo(strArray) {
    let parking = new Map;
    for (let line of strArray) {
        let [command, carNumber] = line.split(", ");
        if (command === 'IN') {
            parking.set(carNumber, "")
        } else {
            parking.delete(carNumber)
        }
    }
    let sort = Array.from(parking).sort((a, b) => a[0].localeCompare(b[0]));
    if (parking.size === 0) {
        console.log("Parking Lot is Empty")
    } else {
        for (let carNumber of sort) {
            console.log(carNumber[0]);
        }
    }
}
piccolo(['IN, CA2844AA', 'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])
