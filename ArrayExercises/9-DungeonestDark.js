function dDark(input) {
    let health = 100;
    let bitcoins = 0;
    let win = true;                             //1 split rooms from input
    let rooms = input[0].split('|');
    for (let i = 0; i < rooms.length; i++) {    // If we use for (let room of rooms) do not have variable i for `Best room: ${i+1}`
        //2 split input for each room
        let room = rooms[i];                
        let tokens = room.split(' ');       
        let command = tokens.shift();       
        let value = Number(tokens);
        switch (command) {                   //3 execute room logic
            case 'potion':  handlePotion(value);            break;
            case 'chest':   handleChest(value);             break;
            default:        handleEnemy(command, value, i); break;
        }
    }
    if (win) {
        console.log("You've made it!")
        console.log(`Coins: ${bitcoins}`)
        console.log(`Health: ${health}`)
    }

    function handlePotion(value) {
        let missingHealth = 100 - health;
        let restoredHealth = Math.min(missingHealth, value);
        health += restoredHealth;
        console.log(`You healed for ${restoredHealth} hp.`)
        console.log(`Current health: ${health} hp.`)
    }
    function handleChest(value) {
        bitcoins += value;
        console.log(`You found ${value} coins.`)
    }
    function handleEnemy(command, value, i) {
        health -= value;
        if (health > 0) {
            console.log(`You slayed ${command}.`)
        } else {
            console.log(`You died! Killed by ${command}.`)
            console.log(`Best room: ${i + 1}`)
            win = false;
            return;
        }
    }
}
dDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
