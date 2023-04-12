function worldTour(inputArr){
    let regex = /[a-zA-Z0-9]+/g;
    let output = inputArr[0];
    for (const inputLine of inputArr) {
        let [command, parameter1, parameter2, parameter3] = inputLine.match(regex);
        switch(command){
            case 'Add': {
                if(Number(parameter2) < output.length) {
                result = output.slice(0, Number(parameter2)) + parameter3 + output.slice(Number(parameter2));
                output = result;
                }
            } break;
            case 'Remove':{
                if((Number(parameter2) && Number(parameter3)) < output.length && (Number(parameter2) && Number(parameter3)) > 0) {
                    result = output.substring(0, Number(parameter2)) + output.substring(Number(parameter3)+1);
                    output = result;
                    }
            } break;
            case 'Switch': {
                 if (output.includes(parameter1)) {
                    let indexOfPar1 = output.indexOf(parameter1);
                    let firstPart = output.slice(0, indexOfPar1);
                    let secondPart = output.slice(indexOfPar1 + parameter1.length);
                    result = firstPart + parameter2 + secondPart;
                    output = result;
                 }
            } break;
            case 'Travel': console.log(`Ready for world tour! Planned stops: ${output}`); break;
        }
    }
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
