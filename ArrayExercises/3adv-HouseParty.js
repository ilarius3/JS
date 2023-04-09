function houseParty(input) {
    let array = [];
    for (const el of input) {
        let firstSpace = el.indexOf(" ");   //el.split(" is ")
        let guestName = el.slice(0, firstSpace);
        let command = el.slice(firstSpace);
        if (command.includes("not")) {
            if (array.includes(guestName)) { //if (array.indexOf(guestName)===-1)
                array.filter((element) => element !== guestName)
                //array.forEach((element, index) => {
                //    guestName === element ? array.splice(index, 1) : null
                //})//array.splice(array.indexOf(guestName), 1)
            } else {
                console.log(`${guestName} is not in the list!`)
            }
        } else {
            !array.includes(guestName) ? array.push(guestName) : console.log(`${guestName} is already in the list!`)
        }
    }
    console.log(array.join("\n"))
}
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!',

    'Garry is going!',     'Jerry is going!'])
