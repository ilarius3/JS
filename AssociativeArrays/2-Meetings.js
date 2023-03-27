function meetingsManager(input) {
    let meetings = {};
    for (let line of input) {
        let [day, person] = line.split(" ");
            if (meetings[day]) {
                console.log(`Conflict on ${day}`)
            } else {
                meetings[day] = person;
                console.log(`Scheduled for ${day}`)
            }
        }
    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}
meetingsManager(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])
