function solve(arr1, arr2) {
    let matches = [];
    for (i=0; i<arr1.length; i++) {
        let sum = 0;
        let catene = '';
            if (i % 2 === 0) {
                sum = Number(arr1[i])+Number(arr2[i]);
                matches.push(sum);
            } else {
                catene += arr1[i];
                catene += arr2[i];
                matches.push(catene);
            }
    }	
    console.log(matches.join(" - "));
}   
solve(['13', '12312', '5', '77', '4'],

['22', '333', '5', '122', '44'])
