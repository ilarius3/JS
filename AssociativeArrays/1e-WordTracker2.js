function wordOccurrences(wordsArray) {
    const targetWords = wordsArray[0].split(" ");
    const wordCounts = {};
    for (let i = 1; i < wordsArray.length; i++) {
      const wordsInLine = wordsArray[i].split(" ");
      for (let j = 0; j < wordsInLine.length; j++) {
        const currentWord = wordsInLine[j];
        if (targetWords.includes(currentWord)) {
          if (wordCounts[currentWord]) {
            wordCounts[currentWord]++;
          } else {
            wordCounts[currentWord] = 1;
          }
        }
      }
    }
    const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);
    for (let i = 0; i < sortedWords.length; i++) {
      console.log(sortedWords[i] + ": " + wordCounts[sortedWords[i]]);
    }
  }
  wordOccurrences([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])
