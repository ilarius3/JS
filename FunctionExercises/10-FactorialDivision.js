function factorialDevision(num1, num2) {
    let factorialSum1 = 1;
    let factorialSum2 = 1;
    for (let i = 2; i <= num1; i++) {
        factorialSum1 *=i;
    }
    for (let n = 2; n <= num2; n++) {
        factorialSum2 *=n;
    }
    console.log((factorialSum1/factorialSum2).toFixed(2))
    //return sum;
}
factorialDevision(5, 2)   
