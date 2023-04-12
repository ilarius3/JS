function activationCode(inputArr) {
    let initialString = inputArr.shift();
    for (let line of inputArr) {
        let [command, parameter1, parameter2, parameter3] = line.split(">>>");
        parameter2 = Number(parameter2);
        parameter3 = Number(parameter3);
        switch (command) {
            case 'Contains': initialString.includes(parameter1) ? console.log(`${initial} contains ${parameter1}`) : console.log("Substring not found!"); break;
            case 'Slice': {
                parameter1 = Number(parameter1);
                let firstPart = initialString.slice(0, parameter1);
                let secondPart = initialString.slice(parameter2);
                let newStr = firstPart + secondPart;
                initialString = newStr;
                //return initialCode;
                console.log(initialString)
            } break;
            case 'Flip': {
                let firstPart = initialString.slice(0, parameter2);
                let secondPart = initialString.slice(parameter3);
                let flipPart = initialString.slice(parameter2, parameter3);
                parameter1 === 'Upper' ? flipPart = flipPart.toUpperCase() : null;
                parameter1 === 'Lower' ? flipPart = flipPart.toLowerCase() : null;
                let newStr = firstPart + flipPart + secondPart;
                initialString = newStr;
                //return initialCode;
                console.log(initialString)
            } break;
        }
        command === 'Generate' ? console.log(`Your activation key is: ${initialString}`) : null;
    }
}
activationCode(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
