function processOddNumbers(arr){
let newArr = arr
.filter((x, i) => i % 2 !== 0)
.map(x => 2*x)
.reverse();
console.log(newArr.join(" "));
}
processOddNumbers([3, 0, 10, 4, 7, 3])
