function count(a, b, c) {
    let result = subtract(add(a, b), c);
    return result;
    
    function add(a, b) {
        return a + b;
    }
    
    function subtract(a, b) {
        return a - b;
    }
}

console.log(count(23, 6, 10))
