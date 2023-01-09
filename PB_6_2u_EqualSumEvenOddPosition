function newYaer(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let mem = "";
    for (i = num1; i <= num2; i++) {
        let current_num = "" + i;
        let sum_odd = 0;
        let sum_even = 0;
        for (p = 0; p < current_num.length; p++) {
            let digit = Number(current_num.charAt(p));
            if (p % 2 === 0) {
                sum_even += digit;
            } else {
                sum_odd += digit;
            }
        }
        if (sum_even == sum_odd) {
            mem += i + " "; //mem += `${i} `;
        }
    }
    console.log(mem)
} newYaer(["100000", "100050"])
