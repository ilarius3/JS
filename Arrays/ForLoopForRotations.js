function solve(arr, count) {
    let rotations = count % arr.length
    for (let i = 0; i < rotations; i++) {
        let element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(" "));
}
solve([10, 20, 30, 40, 50], 13);
