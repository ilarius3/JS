function countWords(input) {
    const counts = {};
    // iterate over the input array and update the counts object
    input.forEach((str) => {
      const words = str.toLowerCase().split(' ');
      words.forEach((word) => {
        if (counts[word]) {
          counts[word]++;
        } else {
          counts[word] = 1;
        }
      });
    });
    // sort the words by count in descending order
    const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    // print the words and their counts
    sorted.forEach((word) => console.log(`${word}: ${counts[word]}`));
  }
  countWords(["Here", "is", "the", "first", "sentence",

  "Here", "is", "another", "sentence", "And",
  
  "finally", "the", "third", "sentence"]);
