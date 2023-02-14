function solve(arr) {
    let array2 = [];
    for (let i = 0; i < arr.length; i++) {
        let replace = arr[i]
        array2[arr.length-1-i] = replace;
    }
    console.log(array2);
}
solve([7, 8, 9, 10, 11])
