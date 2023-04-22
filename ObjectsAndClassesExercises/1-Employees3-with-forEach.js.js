function employeesList(input) {
    let res = {};
    input.forEach(str => {
        res[str] = str.length;
        console.log(`Name: ${str} -- Personal Number: ${res[str]}`)
    });
}
employeesList(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
