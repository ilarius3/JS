function newYaerCount(input) {
    let i = Number(input[0]);
    let count = 0;
    for (let h = 0; h <= i; h++) {
        for (let m = 0; m <= i; m++) {
            for (let s = 0; s <= i; s++) {
                if (h + m + s == i) {
                    count += 1;
                }
            }
        }
    } console.log(count) 
} 
newYaerCount(["20"]);
