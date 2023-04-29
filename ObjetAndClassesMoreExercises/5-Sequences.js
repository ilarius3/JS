function sequences(input) {
    let arrOfArrays = [];
    for (const el of input) {
        arr = JSON.parse(el);
        arr.sort((a, b) => b - a)
        if (!arrOfArrays.find((a) => JSON.stringify(a) === JSON.stringify(arr))) {
            //if (!arrOfArrays.find(a => a.every((val, index) => val === arr[index]))) {    //it works also
            arrOfArrays.push(arr);
        }
    }
    arrOfArrays.sort((a, b) => a.length - b.length).forEach(array => console.log(`[${array.join(", ")}]`))
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]) 
sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"])
