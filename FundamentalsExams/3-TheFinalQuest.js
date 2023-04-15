function theFinalQuest(input) {
    let initialString = input.shift().split(" ");
    for (let i = 0; i < input.length; i++) {
        let [command, firstWord, secondWord] = input[i].split(" ");
        switch (command) {
            case "Delete": {
                let indexOfFirstWord = Number(firstWord);
                if (indexOfFirstWord >= 0 && indexOfFirstWord < initialString.length) {
                    initialString.splice(indexOfFirstWord + 1, 1);
                }
            } break;
            case "Swap": {
                let indexOfFirstWord = initialString.indexOf(firstWord);
                let indexOfsecondWord = initialString.indexOf(secondWord);
                if (indexOfFirstWord !== -1 && indexOfsecondWord !== -1)
                    [initialString[indexOfFirstWord], initialString[indexOfsecondWord]] = [initialString[indexOfsecondWord], initialString[indexOfFirstWord]]
            } break;
            case "Put": {
                let index = Number(secondWord);
                if (index > 0 && index <= initialString.length) {
                    initialString.splice(index-1, 0, firstWord);
                }
            } break;
            case "Sort": {
                initialString.sort((a, b) => b-a);
            } break;
            case "Replace":{
                if (initialString.includes(secondWord)){
                    let index = initialString.indexOf(secondWord);
                    initialString.splice(index, 1, firstWord);
                }
            } break;
            case "Stop":{
                console.log(initialString.join(" "))
            }
        }
    }    
}
theFinalQuest((["Congratulations! You last also through the have challenge!", "Swap have last",
"Replace made have", "Delete 2", "Put it 4", "Stop"]))
theFinalQuest((["Please, follow the instructions!", "Put You 0", "Delete 3", 
"Replace me you", "Replace follow know", "Stop"]))
theFinalQuest(["This the my quest! final", "Put is 2", "Swap final quest!", "Delete 2", "Stop"])
