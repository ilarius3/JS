function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let replace = arr[i]
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = replace;
    }
    console.log(arr);
}
solve([1, 2, 3, 4, 5])
