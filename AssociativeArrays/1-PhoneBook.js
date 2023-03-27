function phoneBook(input) {
    let dict = {};
    input.forEach(el => {   // = for(let el of input)
        let tokens = el.split(" ");
        let personName = tokens[0]; 
        let phone = tokens[1];
        dict[personName] = phone;
        //dict[phone] = personName; 
    });
    for (const key in dict) {
       //console.log(`${key} -> ${dict[key]}`);
    }
    let sorted = Object.entries(dict);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));	//
    for (let i = 0; i < sorted.length; i++) {
        //let firstEntry = entries[0];
        console.log(`${sorted[i][0]} -> ${sorted[i][1]}`);
    }
    //return result = arr.forEach((arr) => console.log(arr))
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])
