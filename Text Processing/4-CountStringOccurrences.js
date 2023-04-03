function countStringOccurrences(text, string){
    let words = text.split(' ');
    count = 0;
    for(let word of words) {
        if(word === string){
            count++;
        }
    }
    return count;
}
console.log(countStringOccurrences('This is a word and it also is a sentence','is'));
