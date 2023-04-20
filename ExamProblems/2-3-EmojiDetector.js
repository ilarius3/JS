function emojiDetector(input) {
    let digitRegex = /\d/g;
    let digitMatch = input[0].match(digitRegex);
    let coolThreshold = 1;
    digitMatch.forEach(match => coolThreshold *= Number(match));
    console.log(`Cool threshold: ${coolThreshold}`)

    let regex = /([::**]{2,})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let matches = input[0].matchAll(regex);
    let asciiSum = 0;
    let emojiCount = 0;
    let result = [];
    for (const match of matches) {
        let emojiLength = match.groups['emoji'].length;
        emojiCount += 1;
        for (let i = 0; i < emojiLength; i++) {
            asciiSum += match.groups['emoji'].charCodeAt(i);
        }
        asciiSum > coolThreshold ? result.push(match[0]) : null;
        asciiSum = 0;
    }                                                                   // 70/100 Judge result
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`)
    console.log(result.join(" \n"))
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
