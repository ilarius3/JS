function solve(arr) {
    for (let i= 0; i<arr.length; i++) {
        console.log(`${arr[i]} -> ${Math.ceil(arr[i])}`);
    }
}
solve([0.5, 2.2, 3.3]);
