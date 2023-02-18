function newYaerCount(input) {
    let num = Number(input[0]);
    let printline = "";
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            for (let c = 1; c < 10; c++) {
                for (let d = 1; d < 10; d++) {
                    if ((num % a == 0) && (num % b == 0) && (num % c == 0) && (num % d == 0)) {
                        printline += a + "" + b + "" + c + "" + d + " ";
                    } else {continue}
                }
            }
        }
    } console.log(printline);
} 
newYaerCount(["16"]);
