function employeesList(input) {
    let res = [];   
    for (let name of input) {
        let myInfo = {      
        name: name,
        personalNumber: name.length
        }
        res.push(myInfo);   
    }
    for (let obj of res) {  
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`)
    }
}
employeesList(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
