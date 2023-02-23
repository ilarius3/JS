function solve(arr) {
    let sum = 0;
    let sumNew = 0;
     for (let i = 0; i < arr.length; i++) {	
        sum += arr[i];
        if (Number(arr[i]) % 2 == 0) {
            arr[i] = Number(arr[i]) + i;
        } else {
            arr[i] = Number(arr[i]) - i;
        }
        sumNew += arr[i];
    }	
    console.log(arr);
    console.log(sum);
    console.log(sumNew);
}   
solve([5, 15, 23, 56, 35])
