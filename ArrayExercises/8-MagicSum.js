function solve(input, n) {
    let array = [];
    for (let i = 0; i < input.length; i++) {
        for (let p = i+1; p < input.length; p++) {
            if (input[i] + input[p] === n) {
                array.push(input[i], input[p])
                console.log(array.join(" "))
                array = [];
                }
        }
    }
}
