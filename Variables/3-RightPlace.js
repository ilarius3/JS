function solve(str, char, result) {			Задача 3:
    let res = str.replace('_', char);
    let output= res === result? "Matched": "Not Matched";
    //горното е съкратена конструкция if - else
    console.log(output);
} 
solve('Str_ng', 'I', 'Strong')
