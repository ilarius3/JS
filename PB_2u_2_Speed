function speed(input) {
    let speedInput = Number(input[0]);
    if (speedInput <=100) {
        bonus1 = 5;
    } else if (speedInput > 100 && speedInput < 1000) {
        bonus1 = speedInput*0.2;
    } else if (speedInput > 1000) {
        bonus1 = speedInput*0.1;
    } 
    if (speedInput % 2 == 0) {
        bonus1 += 1
    } 
    if (speedInput % 10 == 5) {
        bonus1 += 2
    }
    console.log(bonus1)
    console.log(speedInput + bonus1)
} speed(["2703"])
