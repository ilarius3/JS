function destinationMapper(input){
    let regex = /([=\/])(?<destination>[A-Za-z]{3,})\1/g;
    let matches = input.matchAll(regex);
    let result = [];
    let travelPoints = 0;
    for (const match of matches) {
        result.push(match.groups['destination']);
        let dest = match.groups['destination']
        travelPoints += dest.length;    // 80/100 Judge result
    }
    console.log(`Destinations: ` + result.join(", "))
    console.log(`Travel Points: ${travelPoints}`)
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
