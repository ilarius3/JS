function wordTracker(input){
    let selectedWords = {};
    let keyWords = input.shift().split(" ");
    for(let word of keyWords){
        selectedWords[word] = 0;
        for(let str of input){
            if (word === str){  //if(selectedWords.hasOwnProperty(word)){
                selectedWords[word]++;  //selectedWords[word] += 1;
            } 
        }
    }
    let entries = Object.entries(selectedWords).sort((a, b) => b[1] - a[1]);
    for(let [key, value] of entries){
    console.log(`${key} - ${value}`)
    console.table(entries)
    }
}
wordTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])
