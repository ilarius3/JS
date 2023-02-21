function negativePositiveNumbers(arr) {
    let result = [];  
    for (let num of arr){
      if (num < 0){
        result.unshift(num); // Insert at the start
     } else {
        result.push(num);    // Append at the end
    } 
  }
   console.log(result.join('\n'));
  }
  negativePositiveNumbers(['7', '-2', '8', '9'])
