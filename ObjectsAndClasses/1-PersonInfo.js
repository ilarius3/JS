function personInfo(firstName, lastName, age){
    let hisPersonInfo = {}
        hisPersonInfo.firstName = firstName,
        hisPersonInfo.lastName = lastName,
        hisPersonInfo.age = age
    
    return hisPersonInfo;
}
console.log(personInfo("Peter", "Pan", 20))
