function adAstra(input) {
    let regex = /([|#])(?<food>[A-Za-z\s]+)\1(?<date>\d{2}[\/.]\d{2}[\/.]\d{2})\1(?<calories>\d+)\1/g;
    let matches = input[0].matchAll(regex);
    let caloriesCounter = 0;
    let daysFood = 0;
    for (let match of matches) {
        let calories = match.groups['calories'];
        caloriesCounter += Number(calories);
        daysFood = parseInt(caloriesCounter / 2000);
    }
    console.log(`You have food to last you for: ${daysFood} days!`)
    matches = input[0].matchAll(regex);
    for (let match of matches) {                // 100/100 Judge result
        let food = match.groups['food'];
        let date = match.groups['date'];
        let calories = match.groups['calories'];
        console.log(`Item: ${food}, Best before: ${date}, Nutrition: ${calories}`)
    }   
}
//adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
