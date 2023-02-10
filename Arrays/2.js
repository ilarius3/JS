function getDayOfTheWeek(num) {
    let daysOfTheWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Frayday',
        'Saturday',
        'Sunday'    
    ]
    if (num < 1 || num > 7) {
        console.log('Invalid day!');
    } else {
        console.log(daysOfTheWeek[num - 1])
    }
    
}
getDayOfTheWeek(3);
getDayOfTheWeek(6);
getDayOfTheWeek(11);
