function read (input) {
    let index = 0;
    let num = input[index]; index++;
    let count = 100000000000000;
    while (num !== "Stop") {
        let num2 = Number(num);
        if (num2 < count) {
            count = num2;
        }
        num = input[index];
        index++;
    } console.log(count);
} read (["-10",
"20",
"-30",
"Stop"])
