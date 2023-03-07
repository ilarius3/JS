function count(a, b, c) {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let result = subtract(add(a, b), c);
    return result;
}

console.log(count(23, 6, 10))
