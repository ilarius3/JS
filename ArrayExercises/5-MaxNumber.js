function solve(arr) {
    let matches = '';
    for (let i=0; i<arr.length-1; i++) {
        let a = arr[i];
        let flag = true;
        for (let n = i+1; n<arr.length; n++) {
            let b = arr[n];
            if (b >= a) {
                flag = false;
                break;  
            } 
        }	
        if (flag == true) {
            matches += `${a} `;
        }
    }	
    matches += `${arr[arr.length-1]} `;
    console.log(matches);
}   
solve([27, 19, 42, 2, 13, 45, 48])
