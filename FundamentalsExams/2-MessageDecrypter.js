function checkMessageValidityAndDecrypt(inputs) {
    const regex = /^([$%])(?<name>[A-Z][a-z]{2,})\1: \[(?<num1>\d+)\]\|\[(?<num2>\d+)\]\|\[(?<num3>\d+)\]\|$/g;
    let numb = Number(inputs[0]);
    for (let i = 1; i <= numb; i++) {
        let input = inputs[i];
        let match1 = input.match(regex)
        if (!match1) {
            console.log('Valid message not found!');
        }
        let matches = input.matchAll(regex);
        for (let match of matches) {
            let tag = match.groups['name'];
            let firstLetter = String.fromCharCode(match.groups['num1']);
            let secondLetter = String.fromCharCode(match.groups['num2']);
            let thirdLetter = String.fromCharCode(match.groups['num3']);
            if (match) {
                console.log(`${tag}: ${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}
checkMessageValidityAndDecrypt(["4", "$Request$: [73]|[115]|[105]|", "%Taggy$: [73]|[73]|[73]|", "%Taggy%: [118]|[97]|[108]|", "$Request$: [73]|[115]|[105]|[32]|[75]|"])
