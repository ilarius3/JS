function newYaerCount(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);
    let printline = "";
    for (let f = floor; f >= 1; f--) {
        for (let r = 0; r < room; r++) {
            if (f == floor) {
                printline += `L${f}${r} `;
            } else if (f % 2 == 0) {
                printline += `O${f}${r} `;
            } else {
                printline += `A${f}${r} `;
            }
        } console.log(printline); printline ="";
    }
} newYaerCount(["6", "4"])
