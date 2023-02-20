function reverse(n, arr) {
    let array = [];
    for (let i = 0; i < n; i++) {
        //let replace = arr[arr.length-1-i]
        array.push(arr[i]);
    }
    let array2 =[];
    for (let i = array.length-1; i >= 0; i--) {
        //let replace = arr[arr.length-1-i]
        array2.push(array[i]);
    }
    console.log(array2);
}
reverse(4, [-1, 20, 99, 5]);
