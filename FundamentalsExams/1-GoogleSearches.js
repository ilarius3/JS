function googleSearches(inputArray){
    let incomeSingleSearch = Number(inputArray.shift());
    let numberUsers = Number(inputArray.shift());
    let earnedMoneyFromUser = 0;
    let usersCount = 0;
    let totalMoney = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let numSearchesPerUser = Number(inputArray[i]);
        usersCount += 1;
        if(numSearchesPerUser === 1){
            earnedMoneyFromUser = 0;
        } else if((numSearchesPerUser > 5) && (usersCount % 3 === 0)){
            earnedMoneyFromUser = incomeSingleSearch * 3 * 2 * numSearchesPerUser;
        } else if(numSearchesPerUser > 5){
            earnedMoneyFromUser = incomeSingleSearch * 2 * numSearchesPerUser;
        } else if(usersCount % 3 === 0){
            earnedMoneyFromUser = incomeSingleSearch * 3 * numSearchesPerUser;
        } else {
            earnedMoneyFromUser = incomeSingleSearch * numSearchesPerUser;
        }
        totalMoney += earnedMoneyFromUser;
        }
    console.log(`Total money earned: ${totalMoney.toFixed(2)}`)
}
googleSearches(["5.5", "3", "1", "10", "5"])
