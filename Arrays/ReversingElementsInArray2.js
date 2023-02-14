function solve(arr) {
    let array2 = [];
    for (let i = arr.length-1; i >= 0; i--) {
        let replace = arr[arr.length-1-i]
        array2[i] = replace;
    }
    console.log(array2);
}
solve([7, 8, 9, 10, 11])
