function reverse(arr1, arr2) {
    let n = 0;
    let sum = 0;
    let areEqual = true;
    if (arr1.length>=arr2.length){
        n = arr1.length
    } else {
        n = arr2.length
    }
    for (let i = 0; i < n; i++) {
        arr1[i]=Number(arr1[i]);
        arr2[i]=Number(arr2[i]);
        sum += arr1[i];
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }
    if (areEqual==true) {
    console.log(`Arrays are identical. Sum: ${sum}`)
    }
}
reverse(['1','2','3','4','5'], ['1','2','4','4','5']);
