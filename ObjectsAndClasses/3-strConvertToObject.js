function strConvToObject(input){
    let obj = JSON.parse(input)
    //console.log(obj)
    for(let key of Object.keys(obj)){
        console.log(key + ": " + obj[key])
    }
}
strConvToObject('{"name": "George", "age": 40, "town": "Sofia"}')
