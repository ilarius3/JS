function numbersManipulator(input) {
    let array = [];
    let output = '';
    let numbers = input.split(" ").map(Number);
    let sum = numbers.reduce((acc, b) => acc + b, 0);
    let averageNum = (sum / numbers.length).toFixed(2);
    
    numbers.sort((a, b) => b - a);
    numbers.forEach(el => { el > averageNum ? array.push(el) : null })
    
    let biggerThanAverageNumsCount = Math.min(5, array.length);
    for (let i = 0; i < biggerThanAverageNumsCount; i++) {
        output += array[i] + " ";
    }
    array.length == 0 ? console.log('No') : null;
    console.log(output)     //
}
numbersManipulator('-1 -2 -3 -4 -5 -6')
