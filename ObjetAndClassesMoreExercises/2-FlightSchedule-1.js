function flightSchedule(input) {
    let flights = [];
    let changedFlight = [];
    let initialFlight = input.shift();
    let command = String(input.pop());
    for (let line of initialFlight) {
        let firstSpaceIndex = line.indexOf(" ");
        let key = line.slice(0, firstSpaceIndex);
        let value = line.slice(firstSpaceIndex+1);
        let flightWithoutChanges = {
            id: key,
            destination: value,
            status: 'Ready to fly',
        }
        flights.push(flightWithoutChanges);
    }
    for (let row of input[0]) {
        let [key, value] = row.split(" ");
        let foundFlight = flights.find(flight => flight.id === key);
        if (foundFlight !== undefined) {
            foundFlight.status = command;
            changedFlight.push(foundFlight)
        }  
        let foundFlightIndex = flights.findIndex(flight => flight.id === key);
        foundFlight !== undefined ? flights.splice(foundFlightIndex, 1) : null;    
    }
    changedFlight.sort((a, b) => a.destination.localeCompare(b.destination));
    command === 'Cancelled' ? changedFlight.forEach((item) => console.log(`{ Destination: '${item.destination}', Status: '${item.status}' }`)) : null;
    command === 'Ready to fly' ? flights.forEach((item) => console.log(`{ Destination: '${item.destination}', Status: '${item.status}' }`)) : null;
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
