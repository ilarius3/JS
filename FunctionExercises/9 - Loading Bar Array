function loadingBar(num){	//Задача 5:   
    let arr = [];
    let numberPercentSigns = 0;
    numberPercentSigns = num / 10;
    //let output = "[";
    if (numberPercentSigns < 10){
        arr.push(num);
        arr.push("% ");
    }
    arr.push("[");
    for (let i = 1; i <= numberPercentSigns; i++) {
        arr.push("%")
    }
    //console.log(arr)
    if (numberPercentSigns < 10){
        for (let i = 1; i <= 10 - numberPercentSigns; i++) {
            arr.push(".")
        }
    }
    arr.push("]");
    if (numberPercentSigns === 10){
        console.log("100% Complete!")
        console.log(arr.join(""))  
    } else {
        console.log(arr.join(""))
        console.log("Still loading...")  
    }
}   
loadingBar(50)
