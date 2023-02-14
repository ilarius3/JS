function solve(n, arr) {
    let output = "";
    for (let i = n-1; i >= 0; i--) {
        output += String(arr[i])+" "
    }
    console.log(output);
}
solve(3, [7, 8, 9, 10, 11])
