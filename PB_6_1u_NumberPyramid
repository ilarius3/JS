function newYaerCount(input) {
    let n = Number(input[0]);
    let count = 0;
    let print_count = "";
    let end = false;
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (count >= n) {
                console.log(print_count);
                end = true; break;
            }
            count += 1;
            print_count += `${count} `;
        }
        if (end) {
            break;
        }
        console.log(print_count);
        print_count = "";
    }
}
newYaerCount(["7"]);
