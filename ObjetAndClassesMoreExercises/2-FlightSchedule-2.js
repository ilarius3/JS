function flightSchedule(input) {
    let flightWithoutChanges = {};
    let flightToChange = {};
    let changedFlight = [];
    let initialFlight = input.shift();
    let command = String(input.pop());
    for (let line of initialFlight) {
        let firstSpaceIndex = line.indexOf(" ");
        let key = line.slice(0, firstSpaceIndex);
        let value = line.slice(firstSpaceIndex+1);
        flightWithoutChanges[key] = value;
    }
    for (let row of input[0]) {
        let [key, value] = row.split(" ");
        flightToChange[key] = value
    }
    for (let word in flightToChange) {
        for (const key in flightWithoutChanges) {
            if (word === key) {
                changedFlight.push({ key: key, value: flightWithoutChanges[key] });
                delete flightWithoutChanges[key];
            }
        }
    }
    let flightWithoutChange = Object.entries(flightWithoutChanges); 
    changedFlight.sort((a, b) => a.value.localeCompare(b.value));
    command === 'Cancelled' ? changedFlight.forEach((item) => console.log(`{ Destination: '${item.value}', Status: '${command}' }`)) : null;
    command === 'Ready to fly' ? flightWithoutChange.forEach((item) => console.log(`{ Destination: '${item[1]}', Status: '${command}' }`)) : null;
}
flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio',
    'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
['Cancelled']
])
flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama',
    'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'],
['Ready to fly']
])
