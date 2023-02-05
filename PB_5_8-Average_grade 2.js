function read (input) {
    let index = 0;
    let name = input[index]; index++;
    let class_count = 0;
    let count = 0;
    let count2 = 0;
    let av_grade = 0;
    let failed = false;
    while (class_count < 12) {
        let grade = Number(input[index]); index++;
        class_count += 1;
        if (grade < 4) {
            count2 += 1;
            if (count2 == 2) {
                class_count -= 1;
                console.log(`${name} has been excluded at ${class_count} grade`); 
                failed = true; break;
            }
        }
        count += grade;
        av_grade = count/(class_count);
    } 
    if (failed == false) {
        console.log(`${name} graduated. Average grade: ${av_grade.toFixed(2)}`); 
    }
} read (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
