function solve(input){
    digitsSum = Array.from(String(input), Number)
                    .reduce((a, x) => a + x, 0);
    console.log(digitsSum)
}
solve(97561)
