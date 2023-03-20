function towns(input) {
    //let arr = [];
    class Town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }
    for (i = 0; i < input.length; i++) {
        let [town, latitude1, longitude1] = input[i].split(" | ");
        let latitude = Number.parseFloat(latitude1).toFixed(2);
        let longitude = Number.parseFloat(longitude1).toFixed(2);
        let townLocation = new Town(town, latitude, longitude);
        console.log(townLocation)
    }
} 
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);

!!! Expected output: 
Town {town: 'Sofia', latitude: '42.70', longitude: '23.33'}
Town {town: 'Beijing', latitude: '39.91', longitude: '116.36'}
