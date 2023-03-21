function phoneBookInfo (array){
    let arr = [];
    for (let i in array) {
        let personInfo = array[i].split(" ");
        arr.push(personInfo)
        console.log(`${arr[i][0]} -> ${arr[i][1]}`)
    }
    //return result = arr.forEach((arr) => console.log(arr))
}
phoneBookInfo(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])
