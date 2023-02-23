function solve(arr1, arr2) {
    let matches = [];
    for (i=0; i<arr1.length-1; i++) {
        for (let n = 0; n < arr2.length-1; n++) {
            if (arr1[i] === arr2[n]) {
                matches.push(arr1[i]);
            }
        }	
    }	
    console.log(matches.join("\n"));
}   
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],  ['s', 'o', 'c', 'i', 'a', 'l'])
