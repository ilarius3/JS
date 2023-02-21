function smallestTwoNumbers(arr) {
    arr.sort((a, b) => a-b);
    let result = arr.slice(0, 2);
    console.log(result.join(' '));  
}
smallestTwoNumbers([2, 10, 4, 5, 7])    //2 4
