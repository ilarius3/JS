function charactersInRange(num){	//Задача 3:
    let output = '';    
    let oddSum = 0;
    let evenSum = 0;
    num = String(num);
    for (let i = 0; i < num.length; i++) {
        p = Number(num[i]);
        if (p % 2 === 0){
            evenSum += p;
        } else {
            oddSum += p;
        }
       output = 'Odd sum = ' + oddSum + ', Even sum = ' + evenSum;
    }
    console.log(output) 
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
        
}   
charactersInRange(3495)
