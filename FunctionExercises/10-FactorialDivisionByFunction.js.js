function factorialDevision(num1, num2) {
    let factorialSum1 = calcFactorial(num1);
    let factorialSum2 = calcFactorial(num2);
    
    console.log((factorialSum1/factorialSum2).toFixed(2))

    function calcFactorial(num) {
        let res = 1;
        for (let i = num; i > 1; i--) {
            res *=i;
        }
        return res;
    }
}
factorialDevision(6, 2)   
