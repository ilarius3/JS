function storage(input) {
    let map = new Map();
    for (let el of input) {
        let tokens = el.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if(map.has(product)){
           let currentQuantity = map.get(product);
           map.set(product, currentQuantity + quantity);
        } else {
            map.set(product, quantity);
        }
    }
    for (let [key, value] of map) {
        console.log(`${key} -> ${value}`)
    }
}
storage(['tomatoes 10',

    'coffee 5',

    'olives 100',

    'coffee 40'])
