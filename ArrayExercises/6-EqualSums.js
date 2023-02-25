function solve(arr) {
    let result = 'no';
    for (let i = 0; i < arr.length ; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < arr.indexOf(arr[i]); j++) {
            leftSum += arr[j];
        } //дава индекса, от двете страни на който са
        for (let k = arr.length - 1; k > arr.indexOf(arr[i]); k--) {
            rightSum += arr[k];
        } //разположени числа с еднакъв общ сбор.
        if (leftSum === rightSum){
            result = i;
            break;
        }
        if (arr.length==1) {
            result=0;
         }
    }
    console.log(result);
} solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
