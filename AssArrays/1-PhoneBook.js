function phoneBook (input){
    let dict = {}; 
    input.forEach(el => {   // = for(let el of input)
        let tokens = el.split(" ");
        let personName = tokens[0]; //извикване на стринг по позицията му
        let phone = tokens[1];
        dict[personName] = phone;
        //dict[phone] = personName; по този начин ще разменим ключовете на обекта
    });
    for(const key in dict) {
        console.log(`${key} -> ${dict[key]}`);
    }
    //return result = arr.forEach((arr) => console.log(arr))
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])
