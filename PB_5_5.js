function read (input) {
    let index = 0;
    let sum = input[index]; index++;
    let count2 = 0;
    while (sum !== "NoMoreMoney") {
        let count = Number(sum);
        //let count2 = Number(sum);
        if (count < 0) {
            console.log("Invalid operation!"); break;
        }
        console.log(`Increase: ${count.toFixed(2)}`);
        count2 += Number(sum);    
        sum = input[index];
        index++;}
    console.log(`Total: ${count2.toFixed(2)}`);
} read (["5.51", 
"69.42",
"100",
"NoMoreMoney"])
