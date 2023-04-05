function manOwar(input) {
    let pirateShip = input.shift().split('>').map(x => Number(x))
    let warShip = input.shift().split('>').map(x => Number(x))
    let maxHealth = Number(input.shift());
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');
        let command = commands[0];
        let values = commands.slice(1).map(x => Number(x));
        let index = values[0];
        let value = values[1];
        let value2 = values[2];
        let repairCount = 0;
        switch (command) {
            case 'Fire': {
                (index >= 0 && index < warShip.length) ? (warShip[index] -= value) : null;
                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken."); return;
                }
            } break;
            case 'Defend': {
                if ((index && value) >= 0 && (index && value) < pirateShip.length) {
                    for (let i = index; i <= value; i++) {
                        pirateShip[i] -= value2;
                        if (pirateShip[i] < 0) {
                            console.log("You lost! The pirate ship has sunken."); return;
                        }
                    }
                }
            } break;
            case 'Repair': {
                (index >= 0 && index < pirateShip.length) ? (pirateShip[index] += value) : null;
                (pirateShip[index] + value) > maxHealth ? pirateShip[index] = maxHealth : null;
            } break;
            case 'Status': {
                for (const element of pirateShip) {
                    element < maxHealth * 0.2 ? repairCount++ : null;
                }
                console.log(`${repairCount} sections need repair.`)
            } break;
            case 'Retire': {
                let pirateShipStatus = pirateShip.reduce((a, b) => a + b);
                let warShipStatus = warShip.reduce((a, b) => a + b);
                console.log(`Pirate ship status: ${pirateShipStatus}`);
                console.log(`Warship status: ${warShipStatus}`);
                return;
            }
        }
    }
}
manOwar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])
manOwar((["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"]))
