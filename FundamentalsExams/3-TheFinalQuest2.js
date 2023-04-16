function wordManipulator(input) {
    let words = input.shift().split(' ');

    for (let command of input) {
        let tokens = command.split(' ');
        let action = tokens[0];
        if (action === 'Stop') {
            break;
        }
        if (action === 'Delete') {
            let index = Number(tokens[1]);
            if (index >= 0 && index < words.length) {
                words.splice(index + 1, 1);
            }
        }
        if (action === 'Swap') {
            let word1 = tokens[1];
            let word2 = tokens[2];
            if (words.includes(word1) && words.includes(word2)) {
                let index1 = words.indexOf(word1);
                let index2 = words.indexOf(word2);
                [words[index1], words[index2]] = [words[index2], words[index1]];
            }
        }
        if (action === 'Put') {
            let word = tokens[1];
            let index = Number(tokens[2]);
            if (index > 0 && index <= words.length) {
                words.splice(index - 1, 0, word);
            }
        }
        if (action === 'Sort') {
            words.sort((a, b) => b.localeCompare(a));
        }
        if (action === 'Replace') {
            let word1 = tokens[1];
            let word2 = tokens[2];
            if (words.includes(word2)) {
                let index = words.indexOf(word2);
                words[index] = word1;
            }
        }
    }
    console.log(words.join(' '));
}
wordManipulator(["Congratulations! You last also through the have challenge!",
    "Swap have last",
    "Replace made have",
    "Delete 2",
    "Put it 4",
    "Stop"]);
