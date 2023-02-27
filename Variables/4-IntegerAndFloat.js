function solve(firstNum, secondNum, thirdNum) {
    sum = (firstNum + secondNum + thirdNum);
    if (Number.isInteger(sum)) {
        sum += ` - Integer`;
    } else {
        sum += ` - Float`;
    }
    console.log(sum);
}
solve(100, 200, 303.1)
