function charactersInRange(a, b){	//Задача 3:
    let output = '';            //let output = [];
    let n = a.charCodeAt(0);    //can be created also like an array
    let p = b.charCodeAt(0);
    if (a.charCodeAt(0) > b.charCodeAt(0)){
        n = b.charCodeAt(0);
        p = a.charCodeAt(0);
    }
    for (let i = n+1; i < p; i++) {
        m = String.fromCharCode(i)
        output += m+' ';        //output.push(String.fromCharCode(i))
    }
    console.log(output)         //console.log(output.join(' '))
}   

charactersInRange('C', '#')
