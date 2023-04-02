function piccolo(strArray) {
    let arr = [];
    for (let line of strArray) {
        let commandline = line.split(", ");
        let command = commandline.shift();
        let number = commandline.pop();
        if (command === 'IN') {
            arr.unshift(number)
        } else if (command === 'OUT') {
            let targetIndex = arr.findIndex(n => n === number);
            if (targetIndex !== -1) {
                arr.splice(targetIndex, 1);
            }
        }
    }
    if (arr.length === 0) {
        console.log("Parking Lot is Empty")
    } else {
        console.log(arr.sort((a, b) => a.localeCompare(b)).join('\n'));
    }
}
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])
