function employeesList(input) {	        
    let res = [];				    
    for (let name of input) { 		
        res[name] = name.length;	
        }   					    
    for (let key of Object.keys(res)) { 
        console.log(`Name: ${key} -- Personal Number: ${res[key]}`)
    }   					        
}   employeesList(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
