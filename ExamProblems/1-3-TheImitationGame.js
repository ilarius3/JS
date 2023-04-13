function imitationGame(inputArray) {
    let message = inputArray.shift();
    for (let inputLine of inputArray) {
        let [command, parameter1, parameter2] = inputLine.split("|");
        switch (command) {
            case 'Move': move(message, parameter1); break;
            case 'Insert': insert(message, parameter1, parameter2); break;
            case 'ChangeAll': changeAll(message, parameter1, parameter2); break;
            case 'Decode': console.log(`The decrypted message is: ${message}`); return;
        }

        function move(string, par1) {
            if (par1 >= 0 && par1 < string.length) {
                let movedCharacters = string.slice(0, par1);
                let newString = string.slice(par1) + movedCharacters;
                message = newString;
            }
            return string
        }
        function insert(string, par1, par2) {
            if (par1 >= 0 && par1 <= string.length) {
                let firstPart = string.slice(0, par1);
                let secondPart = string.slice(par1)
                let newStr = firstPart + par2 + secondPart;
                message = newStr;
            } return message;
        }
        function changeAll (string, par1, par2){
            let newMessage = '';
            string.includes(par1) ? newMessage = newMessage.replaceAll(par1, par2): null;
            message = newMessage;
            return message;
        }
    }
}
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])
