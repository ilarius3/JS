function extractText(){
    let itemsNodes = document.querySelectorAll("ul#items li");
    let textarea = document.querySelector("#result");
    for(let node of itemsNodes){
        textarea.value += node.textContent + "\n";
    }
}
