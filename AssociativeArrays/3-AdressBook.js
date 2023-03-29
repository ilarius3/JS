function addressbook(input) {
    let addBook = {};
    for (let i = 0; i < input.length; i++) {
        let [name, address] = input[i].split(":")
        addBook[name] = address;
    }
    let sorted = Object.entries(addBook);
    sorted.sort(([a], [b]) => a.localeCompare(b));
    //sorted.sort((a, b) => a[0].localeCompare(b[0]));
    //for (let i = 0; i < sorted.length; i++) {
            //console.log(`${sorted[i][0]} -> ${sorted[i][1]}`);
    //}
    for(let [name, address] of sorted)  {
      console.log(`${name} -> ${address}`);
    }
}
addressbook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])
