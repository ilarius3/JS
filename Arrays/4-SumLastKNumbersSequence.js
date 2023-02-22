function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
      let start = Math.max(0, current - k);
      let sum = 0;
      for (let i=start; i<=current-1; i++) {
        sum += seq[i];
      }
      seq.push(sum);
    }
    console.log(seq.join(' '));
}
sumLastKNumbersSequence(8, 2)
