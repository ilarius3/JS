function distinctArray(input){
    let arr = [];
    for(let i=0; i<input.length; i++){
        let firstElement = input[i];
        for (let j = i+1; j < input.length; j++) {
            let secondElement = input[j];
            firstElement === secondElement ? input.splice(j, 1) : null;
        }
    }
    console.log(input.join(" "))
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])

function distinctArray(input) {
    console.log(input.filter((item, index) => input.indexOf(item) === index).join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])


function distinctArray(input) {
    let arr = [];
    for (let el of input) {
        !arr.includes(el) ? arr.push(el) : null;
    }
    console.log(arr.join(" "))
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])


function distinctArray(input) {
    let arr = [];
    for (let el of input) {
        arr.indexOf(el) === -1 ? arr.push(el) : null;
    }
    console.log(arr.join(" "))
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])


