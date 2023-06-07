function extractText() {
    let lis = document.getElementsByTagName('li');  //Collection of HTML elements
    let liArray = Array.from(lis);  //Array of HTML elements
    let allTexts = liArray.map(x => x.textContent); //Array of strings
    //From everyone we have taken the text
    let textArea = document.getElementById('result');
    textArea.value = allTexts.join('\n');

}
