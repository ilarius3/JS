function checkSign(num1, num2, num3) {

    let sign = 'Positive'
    let isNum1Negative = num1 < 0;  
    sign = checkAndChangeSign(sign, isNum1Negative)
    let isNum2Negative = num2 < 0;
    sign = checkAndChangeSign(sign, isNum2Negative)
    let isNum3Negative = num3 < 0;
    sign = checkAndChangeSign(sign, isNum3Negative)
    return sign;    
    function checkAndChangeSign(sign, shouldChange) {
        if (shouldChange === false) {
            return sign;
        }
        if (sign === 'Positive') {
            sign = 'Negative';
        } else {
            sign = 'Positive'
        }
        return sign;
    }
}
console.log(checkSign(-6, -12, 14));
