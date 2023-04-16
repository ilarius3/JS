function stringManipulator(input) {
    let inputString = input.shift();
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i];
        let commands = tokens.split(" ")
        let command = commands[0];
        switch (command) {
            case 'Translate': {
                let newInputString = inputString.replaceAll('5', 's');
                console.log(newInputString)
                inputString = newInputString;
            }
            case 'Includes': {
                if (commands[0] === 'Includes') {
                    let neededStr = commands[1];
                    if (inputString.includes(neededStr)) {
                        console.log('True')
                    } else { console.log('False') }
                }
            }
            case 'Start': {
                if (commands[0] === 'Start') {
                    let neededStr = commands[1];
                    if (inputString.startsWith(neededStr)) {
                        console.log('True')
                    } else { console.log('False') }
                }
            }
            case 'Lowercase': {
                if (commands[0] === 'Lowercase') {
                let newInputString2 = inputString.toLowerCase();
                console.log(newInputString2) 
                inputString = newInputString2;
                }
            }
            case 'FindIndex': {
                if (commands[0] === 'FindIndex') {
                let neededchar = commands[1];
                console.log(inputString.lastIndexOf(neededchar)) 
                }
            }
            case 'Remove': {
                if (commands[0] === 'Remove') {
                    let startSubstring = inputString.substring(0, commands[1]);
                    let endSubstring = inputString.substring((Number(commands[1]) + Number(commands[2])), )
                    let endString = startSubstring + endSubstring;
               // let startIndex = commands[1] + commands[2];
                //let count = commands[2];
                console.log(endString) 
                }
            } 
            case 'End': {
                if (commands[0] === 'End') {
                return; 
                }
            }
        }
    }
}   
stringManipulator(["*S0ftUni is the B3St Plac3**",

"Translate 2 o",

"Includes best",

"Start the",

"Lowercase",

"FindIndex p",

"Remove 2 7",

"End"])
