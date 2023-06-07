function editElement(ref, match, replaceText) {
    let text = ref.textContent;
    let regex = new RegExp(match, 'g'); //'g' e за глобален регекс, да махне всички съвпадения
    let res = text.replace(regex, replaceText);
    ref.textContent = res;
    console.log(text)
}
