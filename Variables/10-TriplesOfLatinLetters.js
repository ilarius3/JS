function newYaerCount(input) {
    let i = Number(input);
    //let letter = String.fromCharCode(97+);
    for (let h = 0; h < i; h++) {
        let letter1 = String.fromCharCode(97+h);
        for (let m = 0; m < i; m++) {
            let letter2 = String.fromCharCode(97+m);
            for (let s = 0; s < i; s++) {
                let letter3 = String.fromCharCode(97+s);
                console.log(`${letter1}${letter2}${letter3}`)
                
            }
        }
    } 
} 
