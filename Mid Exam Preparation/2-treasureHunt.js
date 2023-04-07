function treasureHunt(inputArray) {
    let treasureChest = inputArray.shift().split("|");
    let gain = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let items = inputArray[i].split(" ");
        let command = items.shift();
        treasureChest = executeCommand(command, items, treasureChest);
    }
    let treasureCount = treasureChest.length;
    for (let i = 0; i < treasureCount; i++) {
        gain += treasureChest[i].length;
    }
    let averageGain = gain / treasureCount;
    treasureCount > 0 ? console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`) : console.log(`Failed treasure hunt.`);
    
    function executeCommand(command, items, treasureChest) {
        switch (command) {
            case 'Loot': {
                for (let i = 0; i < items.length; i++) {
                    treasureChest.indexOf(items[i]) === -1 ? treasureChest.unshift(items[i]) : null;
                }
            } return treasureChest;
            case 'Drop': {
                if (Number(items[0]) > 0 &&  Number(items[0]) < treasureChest.length) {
                    let removedItem = treasureChest.splice(Number(items[0]), 1);
                    treasureChest.push(removedItem[0]);
                }
            } return treasureChest;
            case 'Steal': {
                treasureChest.length < Number(items[0]) ? items[0] = treasureChest.length : null;
                let stolenItems = treasureChest.splice((Number(items[0]) * -1), Number(items[0]));
                console.log(stolenItems.join(", "))
            } return treasureChest;
            case 'Yohoho!': return treasureChest;
        }
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol",
"Drop 3", "Steal 3", "Yohoho!"])
