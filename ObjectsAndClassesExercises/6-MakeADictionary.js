function makeADictionary(input) {
    let obj = {};
    for (i = 0; i < input.length; i++) {
        let [term, description] = input[i].split(":")
        obj[term] = description;
    }
    function sortObj(obj) {
        return Object.keys(obj)
            .sort()
            .reduce(function (result, key) {
                result[key] = obj[key];
               return result;
            }, {});
    }
    //let newObject = sortObj(obj);
    for (let key in sortObj(obj)){
        console.log(`Term: ${key} => Definition: ${obj[key]}`);
    }
}
makeADictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])
