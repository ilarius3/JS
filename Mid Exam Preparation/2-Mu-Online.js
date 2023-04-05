function muOnline(line) {
    let health = 100;
    let bitcoins = 0;                           //split rooms from input
    let rooms = line.split('|'); 
    let roomCount = 0;
    for (let i = 0; i < rooms.length; i++) {    //2 split input for each room
        let room = rooms[i];   
        let tokens = room.split(' '); 
        let command = tokens.shift(); 
        let value = Number(tokens[0]);          //3 execute room logic
        roomCount += 1;
        if (command === 'potion') { 
            let restoredHealth = Math.min((100 - health), value);
            health += restoredHealth;
            console.log(`You healed for ${restoredHealth} hp.`)
            console.log(`Current health: ${health} hp.`)
        } else if (command === 'chest') {   
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`)
        } else {
            health -= value;
            health > 0 ? console.log(`You slayed ${command}.`) : null;
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.\nBest room: ${roomCount}`);
                return;
            }
        }
    }
    console.log(`You've made it!`)
    console.log(`Bitcoins: ${bitcoins}`)
    console.log(`Health: ${health}`)
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
