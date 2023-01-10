function newYaer(input) {
    let num = (input[0]); 
    let index = 1;
    let sum_prime = 0;
    let sum_nonprime = 0;
    while (num !== "stop") {
        num = Number(num);
        isPrime = true;
        if (num < 0) {
            console.log("Number is negative.")
            num = Number(input[index]); index++;
            continue;
        }
        for (p = 2; p < num; p++) {
            if (num % p === 0) {
                isPrime = false; break;
            }
        }
        if (isPrime == false) {
            sum_nonprime += num;
        } else {
            sum_prime += num;
        }
        num = (input[index]); index++;
    }
    console.log("Sum of all prime numbers is: "+sum_prime)
    console.log("Sum of all non prime numbers is: "+sum_nonprime)
} newYaer(["30",
"83",
"33",
"-1",
"20",
"stop"])
