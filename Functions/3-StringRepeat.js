function repeatString(str, repeatNum){
    let result = copyRepeatString(str, repeatNum);
    return result;

function copyRepeatString(str, repeatNum){
    return str.repeat(repeatNum);
}   //за нуждите на джъдж тази функция трябва да е във рамките на другата
}
console.log(repeatString('abc', 3));
