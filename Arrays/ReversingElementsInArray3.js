function solve(n, arr) {
    let array2 = [];
    for (let i = 0; i < n; i++) {
        let replace = arr[i]
        array2[n-1-i] = replace;
    }
    console.log(array2);
}
solve(3, [7, 8, 9, 10, 11])
