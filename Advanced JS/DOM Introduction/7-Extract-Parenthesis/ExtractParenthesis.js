function extract(content) {
    let p = document.getElementById(content)
    let text = p.textContent;
    let regex = /\(([^()]*)\)/g;
    let res = [...text.matchAll(regex)].map(x => x[1]);
    let resString = res.join('; ');
    return resString
}
