function HuntingGames(arr){
    let days = Number(arr[0]);
    let numPlayers = Number(arr[1]);
    let energy = Number(arr[2]);
    let waterDayPerson = Number(arr[3]);
    let foodDayPerson = Number(arr[4]);
    let totalWaterNeeds = days*numPlayers*waterDayPerson;
    let totalFoodNeeds = days*numPlayers*foodDayPerson;
    let energyLoss = 0;
    let success = true;
    for(i=1; i<=days; i++){
        energy -= Number(arr[i+4]);
        energy = energy.toFixed(2);
        energy = Number(energy);
        if (energy<0) {
            success = false;
            console.log(`You will run out of energy. You will be left with ${totalFoodNeeds} food and ${totalWaterNeeds} water.`)
            break;
        }
        else if (i % 2 === 0) {
            energy *= 1.05;
            totalWaterNeeds *= 0.7;
            totalWaterNeeds = totalWaterNeeds.toFixed(2);
            totalWaterNeeds = Number(totalWaterNeeds);
        }
        else if (i % 3 === 0) {
            energy *= 1.1;
            totalFoodNeeds -= totalFoodNeeds / numPlayers;
            totalFoodNeeds = totalFoodNeeds.toFixed(2);
            totalFoodNeeds = Number(totalFoodNeeds);
        }
    }
    if (success == true) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`)
    }
}
//HuntingGames(["10", "7", "5035.5", "11.3", "7.2", "942.3", "500.57", "520.68", "540.87", "505.99", "630.3", "784.2", "321.21", "456.8", "330"]);
HuntingGames([12,
    6,
    4430,
    9.8,
    5.5,
    620.3,
    840.2,
    960.1,
    220,
    340,
    674,
    365,
    345.5,
    212,
    412.12,
    258,
    496]);


