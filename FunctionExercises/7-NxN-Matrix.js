function matrix(n) {
    let output = ""
    for (let i = 1; i <= n; i++) {
        for (let i = 1; i <= n; i++) {
            output += n + " ";
        }
        output += " \n";
    }
    console.log(output)
} 
matrix(6)
