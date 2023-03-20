function towns(input) {
    for (i = 0; i < input.length; i++) {
        let [town, latitude1, longitude1] = input[i].split(" | ");
        
        let latitude = Number.parseFloat(latitude1).toFixed(2);
        let longitude = Number.parseFloat(longitude1).toFixed(2);
        let townLocation = {
            town,
            latitude,
            longitude
        }
        console.log(townLocation)
    }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);

Expected output:
{town: 'Sofia', latitude: '42.70', longitude: '23.33'}
{town: 'Beijing', latitude: '39.91', longitude: '116.36'}
