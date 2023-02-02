function newYaerCount(input) {
    let n = input[0];
    let m = input[1];
    let count = 0;
    let count2 = '';
    for (i = n; i <= m; i++) {
        if (i % 9 == 0) {
            count += i;
            count2 += i + "\n";
        } 
    } console.log(`The sum: ${count}`);
    console.log(count2); 
} newYaerCount([5, 55])
