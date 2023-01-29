function titles(input) {
    let age = Number(input.shift()); // shift() removes the first item of an array
    let gender = (input.shift());
    //let isValid = a > b;
    if (gender == "f") {
        if (age >= 16){
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    } else {
        if (age >= 16){
            console.log("Mr.");
        } else {
            console.log("Master");
        } 
    }
} titles(["f", 10])
