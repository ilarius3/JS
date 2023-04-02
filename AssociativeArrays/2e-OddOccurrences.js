function oddOccurrences(inputStr){
    let wordFrequency = {};
    let words = inputStr.toLowerCase().split(" ");
    for(let word of words){
        wordFrequency[word] = (wordFrequency[word]  || 0) + 1;
    }
    let oddFrequency = [];
    for(let word of words) {
        if(wordFrequency[word] % 2 !== 0 && !oddFrequency.includes(word)){
            oddFrequency.push(word);
        }
    }
    let values = Object.values(oddFrequency);
    console.log(values.join(" "));
    // console.log(`${key}, ${value}`)
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')
