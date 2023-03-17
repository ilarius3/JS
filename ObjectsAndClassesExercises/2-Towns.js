function towns(input){
  
  let result = input.map((row) => { 
    let [town, latitude, longitude] = row.split(" | ");

    return {   
      town,
      latitude: Number.parseFloat(latitude).toFixed(2),
      longitude: Number.parseFloat(longitude).toFixed(2),
    }; 
  });
  
  result.forEach((obj) => console.log(obj));
}
towns([ "Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
