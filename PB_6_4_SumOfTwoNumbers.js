function newYaerCount(input) {
    let f = Number(input[0]);
    let s = Number(input[1]);
    let mag = Number(input[2]);
    let count = 0;
    let comb = false;
    let stop = false;
    let num_comb = (s - f + 1) * (s - f + 1);
    for (let h = f; h <= s; h++) {
        for (let m = f; m <= s; m++) {
            count += 1;
            if (h + m == mag) {
                console.log(`Combination N:${count} (${h} + ${m} = ${mag})`);
                comb = true; stop = true; break;
            }
        }
        if (stop == true) {
            break;
        }
    }
    if (comb == false) {
        console.log(`${num_comb} combinations - neither equals ${mag}`);
    }
} newYaerCount(["1",
    "10",
    "5"])
