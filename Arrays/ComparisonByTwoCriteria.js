let arr = ['aa', 'b', 'ba', 'a'];
arr.sort((a, b) => {
    let result = a.length - b.length;
    if (result === 0) {
        result = a.localeCompare(b);
    }
    return result;
});
console.log(arr);       //(4) ['a', 'b', 'aa', 'ba']
