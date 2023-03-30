function calculateGrades(input) {
    const grades = {};
    input.forEach((str) => {                      // iterate over the input array and update the grades object
      const [name, ...scores] = str.split(' ');
      const total = scores.reduce((acc, curr) => acc + parseInt(curr), 0);
      const count = scores.length;
      if (grades[name]) {
        grades[name].total += total;
        grades[name].count += count;
      } else {
        grades[name] = { total, count };
      }
    });                                         // calculate the average grade for each student and sort by name
    const sorted = Object.keys(grades)
      .sort()
      .map((name) => {
        const avg = grades[name].total / grades[name].count;
        return `${name}: ${avg.toFixed(2)}`;
      });                                     // return the sorted array as a string
    console.log(sorted.join('\n'));
  }
  calculateGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])
