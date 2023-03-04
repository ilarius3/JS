function spice(startYield) {
    let totalYield = 0;
    let count = 0;
    let workersConsum = 26;
    let currentYield = startYield;
    //let storageYield = 0;
    while (currentYield >= 100) {
        startYield = currentYield;
        count += 1;
        totalYield += startYield - workersConsum;
        if (totalYield<0){
            totalYield = 0;
        }
        currentYield -= 10;
    }
    if (currentYield<100){
        totalYield -= workersConsum;
        if (totalYield<0){
            totalYield = 0;
        }
    }
console.log(count)
console.log(totalYield)
}
spice(450)
