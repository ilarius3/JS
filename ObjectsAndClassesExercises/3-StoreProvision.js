function storeProvision(stock, order) {
    const inventory = {};
    // Process the stock array
    for (let i = 0; i < stock.length; i += 2) {
        const product = stock[i];
        const quantity = parseInt(stock[i + 1]);
        inventory[product] = quantity;
    }
    // Process the order array
    for (let i = 0; i < order.length; i += 2) {
        const product = order[i];
        const quantity = parseInt(order[i + 1]);
        if (inventory[product]) {
    //  if (inventory.hasOwnProperty(product)) {
            inventory[product] += quantity;
        } else {
            inventory[product] = quantity;
        }
    }
    // Print the inventory object
    for (const product in inventory) {
        console.log(`${product} -> ${inventory[product]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
