function factorialDevision(num1, num2) {
    let factorialSum1 = 1;
    let factorialSum2 = 1;
    for (let i = num1; i > 1; i-=2) {
        factorialSum1 *=i * (i-1);
    }
 //   console.log(factorialSum1.toFixed(2))
    for (let n = 1; n <= num2; n++) {
        factorialSum2 *=n;
    }
    console.log((factorialSum1/factorialSum2).toFixed(2))
    //return sum;
}
factorialDevision(6, 6)   

