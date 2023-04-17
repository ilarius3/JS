function stringManipulator(input) {
    let inputString = input.shift();
    for (let i = 0; i < input.length; i++) {
        let parameters = input[i].split(" ");  
        let command = parameters.shift();
        inputString = executeComand(command, parameters, inputString);
    }   //return inputString;
    function executeComand(command, parameters, inputString) {
        switch (command) {
            case 'Translate': {
                inputString = inputString.replaceAll(parameters[0], parameters[1]);
                console.log(inputString);
            } return inputString;
            case 'Includes': inputString.includes(parameters[0]) ? console.log('True') : console.log('False'); return inputString;
            case 'Start': inputString.startsWith(parameters[0]) ? console.log('True') : console.log('False'); return inputString;
            case 'Lowercase': {
                inputString = inputString.toLowerCase();
                console.log(inputString);
            } return inputString;
            case 'FindIndex': console.log(inputString.lastIndexOf(parameters[0])); return inputString;
            case 'Remove': {
                let startSubstring = inputString.substring(0, Number(parameters[0]));
                let endSubstring = inputString.substring((Number(parameters[0]) + Number(parameters[1])),)
                let endString = startSubstring + endSubstring;
                console.log(endString)
            } return inputString;
            case 'End': return inputString;
        }   //return inputString;
    }
}   
stringManipulator(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])
