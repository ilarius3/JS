function solve(arr, n) {
    for (let i=0; i<n; i++) {
        let matches = arr.shift();
        arr.push(matches);
    }
    console.log(arr.join(" "));
}	
