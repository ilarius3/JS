function palindromeInt(array){	//Задача 5:   
    for (let i = 0; i < array.length; i++) {
        let str = String(array[i]);
        if (str[0] === str[str.length-1]){
            if(str.length > 3){
                if ((str[0] === str[str.length-1]) && (str[1] === str[str.length-2])){
                    console.log(true);
                } else {
                    console.log(false);
                }
            }
         //   && str[i+1] == str[str.length-1-i]){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}   
palindromeInt([32,2,232,1010])
