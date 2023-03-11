function loadingBar(num){	//Задача 5:   
    let numberPercentSigns = 0;
    numberPercentSigns = num / 10;
    let output = "[";
    for (let i = 1; i <= numberPercentSigns; i++) {
        output += "%"
    }
    if (numberPercentSigns < 10){
        for (let i = 1; i <= 10 - numberPercentSigns; i++) {
            output += "."
        }
    }
    output += "]"
    if (numberPercentSigns === 10){
        console.log("100% Complete!")
        console.log(output)  
    } else {
        console.log(`${num}% ${output}`)
        console.log("Still loading...")  
    }
}   
loadingBar(50)
