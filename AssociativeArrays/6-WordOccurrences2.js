function countWords(input) {
    const counts = new Map();
    // iterate over the input array and update the counts map
    input.forEach((str) => {
      const words = str.toLowerCase().split(' ');
      words.forEach((word) => {
        if (counts.has(word)) {
          counts.set(word, counts.get(word) + 1);
        } else {
          counts.set(word, 1);
        }
      });
    });
    // sort the words by count in descending order
    const sorted = [...counts].sort((a, b) => b[1] - a[1]);
    // print the words and their counts
    sorted.forEach(([word, count]) => console.log(`${word} -> ${count}`));
  }
  countWords(["Here", "is", "the", "first", "sentence",

  "Here", "is", "another", "sentence", "And",
  
  "finally", "the", "third", "sentence"]);
