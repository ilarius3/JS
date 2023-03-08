function passwordValidator(input){	//Задача 6:
    let str = String(input);    
    let onlyLetterAlert = false;
    let correctPassword = true;
    let digitsCounter = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let numOfChar = char.charCodeAt(0);
        if (numOfChar<48 || 
            numOfChar>57 && numOfChar<65 || 
            numOfChar>90 && numOfChar<97 || 
            numOfChar > 122) {
            onlyLetterAlert = true;
            correctPassword = false;
        }
        if (numOfChar>47 && numOfChar<58){
            digitsCounter += 1;
        }
    }
    if (str.length>10 || str.length<6){
        correctPassword = false;
        console.log("Password must be between 6 and 10 characters")
    }
    if (onlyLetterAlert == true){
        correctPassword = false;
        console.log("Password must consist only of letters and digits")     //console.log(output.join(' '))
        }
    if (digitsCounter < 2){
        correctPassword = false;
        console.log("Password must have at least 2 digits")
    }
    if (correctPassword == true){
    console.log("Password is valid")     //console.log(output.join(' '))
    }
}   
passwordValidator('Pa$s$s')
